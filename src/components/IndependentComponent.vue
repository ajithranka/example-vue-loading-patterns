<script setup>
import { ref, onMounted } from 'vue'

import BaseCard from '@/components/BaseCard.vue'
import BaseContent from '@/components/BaseContent.vue'
import BaseContentError from '@/components/BaseContentError.vue'
import BaseContentSkeleton from '@/components/BaseContentSkeleton.vue'
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
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    isLoading.value = true
    data.value = await fetchData({ delay: props.delay, index: props.index })
  } catch (e) {
    error.value = e
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <BaseCard>
    <BaseContentSkeleton v-if="isLoading" />
    <BaseContentError v-else-if="error" :error="error" />
    <BaseContent v-else :data="data" />
  </BaseCard>
</template>
