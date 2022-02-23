<script setup>
defineProps({
  error: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <BaseText>{{ error }}</BaseText>
</template>
