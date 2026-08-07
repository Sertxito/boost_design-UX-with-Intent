<template>
  <button
    :class="[styles.btn, styles[`variant${capitalize(variant)}`]]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { capitalize } from 'vue';
import styles from './Button.module.scss';

interface Props {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
});
</script>

<style module>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
}

.variantPrimary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
  }
}

.variantSecondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);

  &:hover:not(:disabled) {
    background-color: var(--color-secondary-hover);
  }
}
</style>

<!--
Button.module.scss (if using external file):

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;
}

.variantPrimary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.variantSecondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
}
-->

<!--
Usage:
<Button variant="primary">Click me</Button>
<Button variant="secondary" disabled>Disabled</Button>
-->
