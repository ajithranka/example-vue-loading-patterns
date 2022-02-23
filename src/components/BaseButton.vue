<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<style module>
.button {
  background: var(--color-dark-blue);
  border-radius: 4px;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  font-size: var(--scale-sm);
  min-width: 10rem;
  opacity: 1;
  padding: 0.5rem 1rem;
}

.button:hover,
.button:focus {
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
}
</style>
