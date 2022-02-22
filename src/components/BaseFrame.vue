<template>
  <div :class="$style.frame">
    <slot />
  </div>
</template>

<style module>
.frame {
  width: 18rem;
  height: 30rem;
  border: 1px solid var(--color-near-white);
  padding: 1rem;
}
</style>
