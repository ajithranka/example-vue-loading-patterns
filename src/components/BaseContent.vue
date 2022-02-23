<script setup>
import BaseStack from '@/components/BaseStack.vue'
import BaseText from '@/components/BaseText.vue'

defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <BaseStack space="sm">
    <BaseText as="h2" family="title" leading="title" :weight="700" scale="md">{{
      data.title
    }}</BaseText>
    <BaseText scale="sm">{{ data.description }}</BaseText>
  </BaseStack>
</template>
