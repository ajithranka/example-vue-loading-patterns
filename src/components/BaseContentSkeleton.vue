<script setup>
import BaseStack from '@/components/BaseStack.vue'
import BaseSkeleton from '@/components/BaseSkeleton.vue'
</script>

<template>
  <BaseStack>
    <BaseSkeleton width="50%" />
    <BaseSkeleton />
    <BaseSkeleton />
  </BaseStack>
</template>
