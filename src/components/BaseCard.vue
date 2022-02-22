<script setup>
defineProps({
  variant: {
    type: String,
    default: 'elevated',
    validator: (value) => ['elevated', 'depressed'].includes(value),
  },
})
</script>

<template>
  <div :class="$style.card" :data-variant="variant">
    <slot />
  </div>
</template>

<style module>
.card {
  padding: 1.5rem;
}

.card[data-variant='elevated'] {
  background: radial-gradient(
    134.5% 939.99% at -23.59% -12.9%,
    #262626 0%,
    rgba(26, 26, 26, 0.86293) 31.41%,
    rgba(32, 32, 32, 0.49) 100%
  );
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.card[data-variant='depressed'] {
  background: linear-gradient(141.48deg, #161616 -4.56%, #151515 135.63%);
  box-shadow: inset -2px -2px 4px rgba(57, 57, 57, 0.44),
    inset 5px 5px 10px rgba(11, 11, 11, 0.5);
  border-radius: 10px;
}
</style>
