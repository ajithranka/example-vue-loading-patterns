<script setup>
import BaseCard from '@/components/BaseCard.vue'
import BaseFrame from '@/components/BaseFrame.vue'
import BaseSkeleton from '@/components/BaseSkeleton.vue'
import BaseStack from '@/components/BaseStack.vue'
// import Text from '@/components/Text.vue'
</script>

<template>
  <div :class="$style.container">
    <BaseFrame>
      <BaseStack>
        <BaseCard>
          <BaseStack>
            <BaseStack>
              <BaseSkeleton width="50%" />
              <BaseSkeleton />
              <BaseSkeleton />
            </BaseStack>

            <BaseCard variant="depressed">
              <BaseStack>
                <BaseSkeleton width="50%" />
                <BaseSkeleton />
                <BaseSkeleton />
              </BaseStack>
            </BaseCard>
          </BaseStack>
        </BaseCard>
        <BaseCard>
          <BaseStack>
            <BaseStack>
              <BaseSkeleton width="50%" />
              <BaseSkeleton />
              <BaseSkeleton />
            </BaseStack>
          </BaseStack>
        </BaseCard>
      </BaseStack>
    </BaseFrame>
    <BaseFrame>
      <BaseStack>
        <BaseCard>
          <BaseStack>
            <BaseSkeleton width="50%" />
            <BaseSkeleton />
            <BaseSkeleton />
          </BaseStack>
        </BaseCard>
        <BaseCard>
          <BaseStack>
            <BaseSkeleton width="50%" />
            <BaseSkeleton />
            <BaseSkeleton />
          </BaseStack>
        </BaseCard>
        <BaseCard>
          <BaseStack>
            <BaseSkeleton width="50%" />
            <BaseSkeleton />
            <BaseSkeleton />
          </BaseStack>
        </BaseCard>
      </BaseStack>
    </BaseFrame>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
