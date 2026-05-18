<template>
  <button
    :class="[
      'inline-flex items-center justify-center',
      'min-h-11 px-4 py-2',
      'rounded-md border border-transparent',
      'font-medium cursor-pointer',
      'transition-all duration-200 ease-in-out',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'motion-reduce:transition-none',
      'hover:enabled:-translate-y-0.5 active:enabled:translate-y-0',
      variantClasses,
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
});

const variantClasses = computed(() => {
  return props.variant === 'primary'
    ? 'bg-blue-600 text-white hover:enabled:bg-blue-700 hover:enabled:shadow-lg'
    : 'bg-gray-100 text-gray-900 hover:enabled:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:enabled:bg-gray-600';
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm min-h-9';
    case 'lg':
      return 'px-6 py-3 text-lg min-h-12';
    default:
      return 'px-4 py-2 text-base';
  }
});
</script>

<!--
tailwind.config.ts:

import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**\/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
-->

<!--
CSS Variables (app.css):

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: 221 90% 45%;
    --color-secondary: 0 0% 93%;
  }

  [data-theme="dark"] {
    --color-primary: 217 91% 60%;
    --color-secondary: 217 33% 31%;
  }
}
-->

<!--
Usage:
<Button variant="primary" size="md">Primary</Button>
<Button variant="secondary" size="sm" disabled>Secondary</Button>
<Button size="lg">Large</Button>
-->
