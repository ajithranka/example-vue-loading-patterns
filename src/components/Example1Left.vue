<script setup>
import IndependentComponent from '@/components/IndependentComponent.vue'
</script>

<template>
  <IndependentComponent :delay="1" :index="0" />
  <IndependentComponent :delay="3" :index="1" />
  <IndependentComponent :delay="2" :index="2" />
</template>
