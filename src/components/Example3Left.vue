<script setup>
import IndependentComponent from '@/components/IndependentComponent.vue'
</script>

<template>
  <IndependentComponent :delay="2" :index="0">
    <IndependentComponent :delay="3" :index="1" variant="depressed" />
  </IndependentComponent>
</template>
