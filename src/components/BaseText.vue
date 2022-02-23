<script setup>
defineProps({
  as: {
    type: String,
    default: 'p',
  },
  family: {
    type: String,
    default: 'copy',
    validator: (value) => ['title', 'copy'].includes(value),
  },
  leading: {
    type: String,
    default: 'copy',
    validator: (value) => ['title', 'copy'].includes(value),
  },
  scale: {
    type: String,
    default: 'md',
    validator: (value) =>
      ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
  },
  weight: {
    type: Number,
    default: 400,
    validator: (value) =>
      [100, 200, 300, 400, 500, 600, 700, 800, 900].includes(value),
  },
})
</script>

<template>
  <component
    :is="as"
    :class="$style.text"
    :style="{
      '--family': `var(--family-${family})`,
      '--leading': `var(--leading-${leading})`,
      '--scale': `var(--scale-${scale})`,
      '--weight': weight,
    }"
  >
    <slot />
  </component>
</template>

<style module>
.text {
  font-family: var(--family);
  font-size: var(--scale);
  font-weight: var(--weight);
  color: inherit;
}
</style>
