// Button.module.scss
// Copy this to your project as: src/components/Button/Button.module.scss

export const styles = {
  button: 'button__1a2b3c',
  'variant-primary': 'button__variant-primary__2d3e4f',
  'variant-secondary': 'button__variant-secondary__5g6h7i',
};

/*
ACTUAL SCSS FILE:
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm, 8px) var(--spacing-md, 16px);
  min-height: 44px; // Touch target
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-focus, #0066cc);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
}

.variant-primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
  }
}

.variant-secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);

  &:hover:not(:disabled) {
    background-color: var(--color-secondary-hover);
  }
}
*/

// Button.tsx
// Copy this to your project as: src/components/Button/Button.tsx

import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const variantClass = styles[`variant-${variant}`] || '';
    const combinedClass = `${styles.button} ${variantClass} ${className || ''}`.trim();

    return (
      <button ref={ref} className={combinedClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Usage in components:
/*
<Button variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Button>

<Button variant="secondary" disabled>
  Disabled
</Button>
*/
