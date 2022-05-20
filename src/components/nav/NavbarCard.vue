<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  value: number;
  iconUri: string;
  isActive: boolean;
}>();

const iconComponent = defineAsyncComponent(
  () => import(/* @vite-ignore */ props.iconUri)
);
</script>

<template>
  <div class="pointer-cursor" :class="[classes.card, props.isActive && classes.active]">
    <div :class="classes['card-inner']">
      <div :class="classes['card-icon-container']">
        <component
          :class="classes['card-icon']"
          v-if="iconComponent"
          :is="iconComponent"
          :fill="props.isActive ? 'var(--secondary)' : 'var(--primary)'"
        />
      </div>
      <div :class="classes['card-text-content-container']">
        <div :class="[classes['card-text-title'], props.isActive && classes.active]">
          {{ props.title }}
        </div>
        <div :class="classes['card-text-description']">{{ props.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.card {
  background-color: white;
  border-radius: 8px;
  min-width: 200px;
  min-height: 100px;
  max-width: 40%;
  box-sizing: border-box;
  border: 1px solid white;
  margin: 1rem;
  flex: 1;
}

.active {
  border-color: var(--secondary);
}
.card-inner {
  margin: 1rem;
  display: flex;
  justify-content: space-between;
}

.card-icon-container {
  aspect-ratio: 1/1;
  min-width: 75px;
}

.card-icon {
  display: block;
  margin: auto;
}

.card-text-content-container {
  width: 70%;
}

.card-text-title {
  color: var(--primary);
  font-weight: bold;
  font-size: 90%;
  margin-bottom: 0.25rem;

  &.active {
    color: var(--secondary);
  }
}

.card-text-description {
  font-size: 80%;
  color: #9e9e9e;
}
</style>
