<script setup>
defineProps({
  space: {
    type: String,
    default: 'md',
    validator: (value) =>
      ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
  },
})
</script>

<template>
  <div :class="$style.stack" :style="{ '--space': `var(--spacing-${space})` }">
    <slot />
  </div>
</template>

<style module>
.stack > * + * {
  margin-top: var(--space);
}
</style>
