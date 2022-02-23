<script setup>
import BaseFrame from '@/components/BaseFrame.vue'
import Example3Left from '@/components/Example3Left.vue'
import Example3Right from '@/components/Example3Right.vue'
import Example3Skeleton from '@/components/Example3Skeleton.vue'
</script>

<template>
  <div :class="$style.container">
    <BaseFrame>
      <Example3Left />
    </BaseFrame>
    <BaseFrame>
      <Suspense>
        <Example3Right />
        <template #fallback>
          <Example3Skeleton />
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
