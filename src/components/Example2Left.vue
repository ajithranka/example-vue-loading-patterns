<script setup>
import SuspendableComponent from '@/components/SuspendableComponent.vue'
</script>

<template>
  <SuspendableComponent :delay="1" :index="0" />
  <SuspendableComponent :delay="3" :index="1" />
  <SuspendableComponent :delay="5" :index="2" />
</template>
