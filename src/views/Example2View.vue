<script setup>
import BaseFrame from '@/components/BaseFrame.vue'
import Example2Left from '@/components/Example2Left.vue'
import Example2Right from '@/components/Example2Right.vue'
import Example2Skeleton from '@/components/Example2Skeleton.vue'
</script>

<template>
  <div :class="$style.container">
    <BaseFrame>
      <Suspense>
        <Example2Left />
        <template #fallback>
          <Example2Skeleton />
        </template>
      </Suspense>
    </BaseFrame>
    <BaseFrame>
      <Suspense>
        <Example2Right />
        <template #fallback>
          <Example2Skeleton />
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
