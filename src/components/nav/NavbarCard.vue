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
  min-width: 220px;
  max-width: 360px;
  min-height: 100px;
  box-sizing: border-box;
  flex-basis: min-content;
  border: 1px solid white;
  margin: 1rem;
  max-height: 150px;
  flex-shrink: 1;
  flex: 1;
}

.active {
  border-color: var(--secondary);
}
.card-inner {
  margin: 1vmax;
  display: flex;
  flex-basis: min-content;
  justify-content: space-between;
  flex-grow: 1;
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

@media screen and (max-width: 767px) {
  .card {
    max-width: 450px;
  }
}
</style>
