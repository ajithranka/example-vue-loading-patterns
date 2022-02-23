<script setup>
import { useRoute } from 'vue-router'

import BaseStack from '@/components/BaseStack.vue'
import BaseButton from '@/components/BaseButton.vue'

const route = useRoute()
</script>

<template>
  <BaseStack>
    <RouterView />

    <div v-if="route.path !== '/'" :class="$style.controls">
      <BaseButton @click="$router.go(0)">Reload</BaseButton>
    </div>
  </BaseStack>
</template>

<style>
@import '@/styles.css';
</style>

<style module>
.controls {
  display: flex;
  justify-content: center;
}
</style>
