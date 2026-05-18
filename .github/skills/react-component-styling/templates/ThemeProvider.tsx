// ThemeProvider.tsx
// Theme/Dark mode provider with persistence

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  systemTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  storageKey?: string;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  storageKey = 'app-theme',
  defaultTheme = 'light',
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    const stored = typeof window !== 'undefined'
      ? localStorage.getItem(storageKey)
      : null;

    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemDark ? 'dark' : 'light';
    }

    return defaultTheme;
  });

  const [systemTheme, setSystemTheme] = useState<Theme>('light');

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme to DOM and localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Set initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        systemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Usage in App:
/*
import { ThemeProvider } from './ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <MainContent />
    </ThemeProvider>
  );
}

// In any component:
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}
*/

// CSS Variables for theming:
/*
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
