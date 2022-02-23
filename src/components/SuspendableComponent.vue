<script setup>
import { ref } from 'vue'

import BaseCard from '@/components/BaseCard.vue'
import BaseContent from '@/components/BaseContent.vue'
import BaseStack from '@/components/BaseStack.vue'
import { fetchData } from '@/api'

const props = defineProps({
  delay: {
    type: Number,
    default: 3,
  },
  index: {
    type: Number,
    default: 0,
  },
})

const data = ref(null)
data.value = await fetchData({ delay: props.delay, index: props.index })
</script>

<template>
  <BaseCard>
    <BaseStack space="lg">
      <BaseContent :data="data" />
      <slot />
    </BaseStack>
  </BaseCard>
</template>
