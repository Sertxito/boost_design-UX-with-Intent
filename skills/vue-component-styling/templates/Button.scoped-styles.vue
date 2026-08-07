<template>
  <button
    :class="['btn', `btn--${variant}`, { 'is-loading': loading }]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="spinner" />
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
}

interface Emits {
  (e: 'click', event: MouseEvent): void;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
  loading: false,
});

defineEmits<Emits>();
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  /* Sizing */
  min-height: 44px;
  padding: 8px 16px;

  /* Styling */
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;

  /* Focus and Accessibility */
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Hover state */
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  /* Active state */
  &:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }
}

/* Variants */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
  }
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);

  &:hover:not(:disabled) {
    background-color: var(--color-secondary-hover);
  }
}

/* Loading state */
.is-loading {
  pointer-events: none;
}

.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
  }
}
</style>

<!--
Usage:
<Button variant="primary" @click="handleClick">
  Click me
</Button>

<Button variant="secondary" disabled>
  Disabled
</Button>

<Button :loading="isLoading" @click="submit">
  Submit
</Button>
-->
