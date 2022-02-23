<script setup>
import BaseCard from '@/components/BaseCard.vue'
import BaseContentSkeleton from '@/components/BaseContentSkeleton.vue'
import SuspendableComponent from '@/components/SuspendableComponent.vue'
</script>

<template>
  <SuspendableComponent :delay="1" :index="0" />
  <SuspendableComponent :delay="3" :index="1" />

  <Suspense>
    <SuspendableComponent :delay="5" :index="2" />
    <template #fallback>
      <BaseCard>
        <BaseContentSkeleton />
      </BaseCard>
    </template>
  </Suspense>
</template>
