// composables/useTheme.ts

import { ref, computed, watch } from 'vue';

type Theme = 'light' | 'dark';

const theme = ref<Theme>('light');
const storageKey = 'app-theme';

/**
 * Composable for managing theme (light/dark mode) with persistence
 *
 * Features:
 * - Persists to localStorage
 * - Respects system preference on first visit
 * - Reactive theme changes
 * - SSR-safe
 */
export const useTheme = () => {
  /**
   * Initialize theme from storage or system preference
   */
  const initTheme = () => {
    // Check if running in browser
    if (typeof window === 'undefined') return;

    // Check localStorage first
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored && ['light', 'dark'].includes(stored)) {
      theme.value = stored;
      return;
    }

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark';
    }
  };

  /**
   * Apply theme to DOM and storage
   */
  const applyTheme = () => {
    if (typeof window === 'undefined') return;

    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem(storageKey, theme.value);
  };

  /**
   * Set theme explicitly
   */
  const setTheme = (newTheme: Theme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      theme.value = newTheme;
      applyTheme();
    }
  };

  /**
   * Toggle between light and dark mode
   */
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme();
  };

  /**
   * Get system preference
   */
  const getSystemPreference = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  // Watch for external changes (e.g., storage events in other tabs)
  watch(theme, applyTheme);

  // Initialize on first use
  if (typeof window !== 'undefined' && !theme.value) {
    initTheme();
  }

  return {
    theme: computed(() => theme.value),
    setTheme,
    toggleTheme,
    getSystemPreference: computed(() => getSystemPreference()),
    isDark: computed(() => theme.value === 'dark'),
    isLight: computed(() => theme.value === 'light'),
  };
};

// Optional: Store listener for system theme changes
export const useSystemThemeListener = () => {
  if (typeof window === 'undefined') return;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = (e: MediaQueryListEvent) => {
    // Optional: Auto-switch if user hasn't set preference
    const stored = localStorage.getItem(storageKey);
    if (!stored) {
      const { setTheme } = useTheme();
      setTheme(e.matches ? 'dark' : 'light');
    }
  };

  mediaQuery.addEventListener('change', handleChange);

  // Cleanup
  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
};

/*
Usage in components:

<template>
  <button @click="toggleTheme">
    {{ isDark ? '☀️ Light' : '🌙 Dark' }}
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme, isDark } = useTheme();
</script>

Usage in App.vue:

<script setup>
import { useTheme, useSystemThemeListener } from '@/composables/useTheme';
import { onMounted, onUnmounted } from 'vue';

const { theme } = useTheme();

// Optional: listen for system theme changes
let unsubscribe: (() => void) | undefined;
onMounted(() => {
  unsubscribe = useSystemThemeListener();
});
onUnmounted(() => {
  unsubscribe?.();
});
</script>

CSS Variables (styles/theme.css):

:root {
  --color-primary: #0066cc;
  --color-on-primary: #ffffff;
  --color-secondary: #f0f0f0;
  --color-on-secondary: #000000;
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #e0e0e0;
}

[data-theme="dark"] {
  --color-primary: #3399ff;
  --color-on-primary: #000000;
  --color-secondary: #2a2a2a;
  --color-on-secondary: #ffffff;
  --color-background: #1a1a1a;
  --color-text: #ffffff;
  --color-border: #404040;
}
*/
