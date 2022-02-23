<script setup>
import BaseCard from '@/components/BaseCard.vue'
import BaseContentSkeleton from '@/components/BaseContentSkeleton.vue'
import BaseStack from '@/components/BaseStack.vue'
</script>

<template>
  <BaseStack>
    <BaseCard>
      <BaseContentSkeleton />
    </BaseCard>
    <BaseCard>
      <BaseContentSkeleton />
    </BaseCard>
    <BaseCard>
      <BaseContentSkeleton />
    </BaseCard>
  </BaseStack>
</template>
