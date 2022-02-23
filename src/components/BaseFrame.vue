<script setup>
import BaseStack from '@/components/BaseStack.vue'
</script>

<template>
  <div :class="$style.frame">
    <BaseStack>
      <slot />
    </BaseStack>
  </div>
</template>

<style module>
.frame {
  width: 18rem;
  height: 28rem;
  border: 2px solid var(--color-near-black);
  padding: 1rem;
}
</style>
