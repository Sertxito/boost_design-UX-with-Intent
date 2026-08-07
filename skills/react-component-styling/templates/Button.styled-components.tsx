// Button.tsx
// Copy this to your project and install: npm install styled-components

import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  $variant?: 'primary' | 'secondary';
  $size?: 'sm' | 'md' | 'lg';
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Sizing */
  min-height: 44px; /* Touch target */
  padding: ${props => {
    switch (props.$size) {
      case 'sm': return '6px 12px';
      case 'lg': return '12px 24px';
      default: return '8px 16px';
    }
  }};
  font-size: ${props => {
    switch (props.$size) {
      case 'sm': return '14px';
      case 'lg': return '18px';
      default: return '16px';
    }
  }};

  /* Styling */
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;

  /* Colors based on variant */
  background-color: ${props => {
    switch (props.$variant) {
      case 'primary': return 'var(--color-primary, #0066cc)';
      case 'secondary': return 'var(--color-secondary, #f0f0f0)';
      default: return '#0066cc';
    }
  }};

  color: ${props => {
    switch (props.$variant) {
      case 'primary': return 'var(--color-on-primary, #ffffff)';
      case 'secondary': return 'var(--color-on-secondary, #000000)';
      default: return '#ffffff';
    }
  }};

  /* States */
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: ${props => {
      switch (props.$variant) {
        case 'primary': return 'var(--color-primary-hover, #0052a3)';
        case 'secondary': return 'var(--color-secondary-hover, #e0e0e0)';
        default: return '#0052a3';
      }
    }};
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

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', ...props }, ref) => (
    <StyledButton
      ref={ref}
      $variant={variant}
      $size={size}
      {...props}
    />
  )
);

Button.displayName = 'Button';

// Global Styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #0066cc;
    --color-on-primary: #ffffff;
    --color-primary-hover: #0052a3;

    --color-secondary: #f0f0f0;
    --color-on-secondary: #000000;
    --color-secondary-hover: #e0e0e0;

    --color-focus: #0066cc;

    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
  }

  [data-theme="dark"] {
    --color-primary: #3399ff;
    --color-on-primary: #000000;
    --color-primary-hover: #1a7fcc;

    --color-secondary: #2a2a2a;
    --color-on-secondary: #ffffff;
    --color-secondary-hover: #3a3a3a;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
    background-color: var(--color-background, white);
    color: var(--color-text, black);
  }
`;

// Usage:
/*
import { Button, GlobalStyles } from './Button';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button variant="primary" size="md" onClick={() => {}}>
        Click me
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </>
  );
}
*/
