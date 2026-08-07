// Button.tsx
// For use with Tailwind CSS
// Setup: npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    className,
    ...props
  }, ref) => {
    const baseStyles = clsx(
      'inline-flex items-center justify-center',
      'min-h-[44px]',
      'rounded-md border border-transparent',
      'font-medium',
      'cursor-pointer',
      'transition-all duration-200',
      'select-none',
      // Focus state
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
      // Disabled state
      'disabled:opacity-50 disabled:cursor-not-allowed',
      // Reduced motion
      'motion-reduce:transition-none'
    );

    const variantStyles = {
      primary: clsx(
        'bg-blue-600 text-white',
        'hover:enabled:bg-blue-700 hover:enabled:-translate-y-0.5 hover:enabled:shadow-lg',
        'active:enabled:translate-y-0'
      ),
      secondary: clsx(
        'bg-gray-100 text-gray-900',
        'hover:enabled:bg-gray-200',
        'dark:bg-gray-700 dark:text-white dark:hover:enabled:bg-gray-600'
      ),
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const combinedClassName = clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    return (
      <button ref={ref} className={combinedClassName} {...props} />
    );
  }
);

Button.displayName = 'Button';

// tailwind.config.ts
/*
import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**\/*.{js,ts,jsx,tsx}',
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
  plugins: [],
  darkMode: 'selector', // Enable dark mode with data-theme or class
} satisfies Config;
*/

// CSS with CSS variables integration
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: 221 90% 45%; /* blue-600 in HSL */
    --color-secondary: 0 0% 93%; /* gray-100 in HSL */
  }

  [data-theme="dark"] {
    --color-primary: 217 91% 60%; /* blue-400 */
    --color-secondary: 217 33% 31%; /* gray-700 */
  }
}

@layer components {
  .btn-primary {
    @apply bg-blue-600 text-white hover:enabled:bg-blue-700 active:enabled:translate-y-0;
  }

  .btn-secondary {
    @apply bg-gray-100 text-gray-900 hover:enabled:bg-gray-200;
  }
}
*/

// Usage:
/*
import { Button } from './Button';

function App() {
  return (
    <div className="space-y-4">
      <Button variant="primary" size="md" onClick={() => {}}>
        Primary Button
      </Button>

      <Button variant="secondary" size="sm">
        Secondary Small
      </Button>

      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
}
*/
