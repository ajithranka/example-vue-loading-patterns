<script setup>
import BaseCard from '@/components/BaseCard.vue'
import BaseContentSkeleton from '@/components/BaseContentSkeleton.vue'
import BaseStack from '@/components/BaseStack.vue'
</script>

<template>
  <BaseCard>
    <BaseStack space="lg">
      <BaseContentSkeleton />
      <BaseCard variant="depressed">
        <BaseContentSkeleton />
      </BaseCard>
    </BaseStack>
  </BaseCard>
</template>
