<script setup>
import BaseFrame from '@/components/BaseFrame.vue'
import Example1Left from '@/components/Example1Left.vue'
import Example1Right from '@/components/Example1Right.vue'
import Example1Skeleton from '@/components/Example1Skeleton.vue'
</script>

<template>
  <div :class="$style.container">
    <BaseFrame>
      <Example1Left />
    </BaseFrame>
    <BaseFrame>
      <Suspense>
        <Example1Right />
        <template #fallback>
          <Example1Skeleton />
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
