<script setup>
import BaseFrame from '@/components/BaseFrame.vue'
import Example2Left from '@/components/Example2Left.vue'
import Example2Right from '@/components/Example2Right.vue'
import SkeletonScreen from '@/components/SkeletonScreen.vue'
</script>

<template>
  <div :class="$style.container">
    <BaseFrame>
      <Suspense>
        <Example2Left />
        <template #fallback>
          <SkeletonScreen />
        </template>
      </Suspense>
    </BaseFrame>
    <BaseFrame>
      <Suspense>
        <Example2Right />
        <template #fallback>
          <SkeletonScreen />
        </template>
      </Suspense>
    </BaseFrame>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
