<script setup>
import SuspendableComponent from '@/components/SuspendableComponent.vue'
</script>

<template>
  <SuspendableComponent :delay="2" :index="0">
    <SuspendableComponent :delay="3" :index="1" variant="depressed" />
  </SuspendableComponent>
</template>
