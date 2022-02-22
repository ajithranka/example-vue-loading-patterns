<script setup>
defineProps({
  width: {
    type: String,
    default: '100%',
  },
})
</script>

<template>
  <div :class="$style.skeleton" :style="{ '--width': width }" />
</template>

<style module>
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-dark-gray) 0%,
    var(--color-dark-gray) 20%,
    var(--color-near-black) 50%,
    var(--color-dark-gray) 80%,
    var(--color-dark-gray) 100%
  );
  background-size: 200% 200%;
  border-radius: 4px;
  animation: shift 1.5s linear infinite;
  width: var(--width);
  height: 1rem;
}

@keyframes shift {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: -100% 50%;
  }
}
</style>
