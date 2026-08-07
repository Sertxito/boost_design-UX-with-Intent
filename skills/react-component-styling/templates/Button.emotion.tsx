// Button.tsx
// Copy this to your project and install: npm install @emotion/react @emotion/styled

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Common button styles
const buttonBaseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;

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
`;

interface StyledButtonProps {
  $variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBaseStyles}

  padding: 8px 16px;
  font-size: 16px;

  background-color: ${props =>
    props.$variant === 'primary'
      ? 'var(--color-primary, #0066cc)'
      : 'var(--color-secondary, #f0f0f0)'};

  color: ${props =>
    props.$variant === 'primary'
      ? 'var(--color-on-primary, #ffffff)'
      : 'var(--color-on-secondary, #000000)'};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => (
    <StyledButton
      ref={ref}
      $variant={variant}
      {...props}
    />
  )
);

Button.displayName = 'Button';

// Global Styles with Emotion
import { Global } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --color-primary: #0066cc;
        --color-on-primary: #ffffff;
        --color-secondary: #f0f0f0;
        --color-on-secondary: #000000;
        --color-focus: #0066cc;
      }

      [data-theme="dark"] {
        --color-primary: #3399ff;
        --color-on-primary: #000000;
        --color-secondary: #2a2a2a;
        --color-on-secondary: #ffffff;
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
    `}
  />
);

// Usage:
/*
import { Button, GlobalStyles } from './Button';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button variant="primary" onClick={() => {}}>
        Click me
      </Button>
    </>
  );
}
*/
