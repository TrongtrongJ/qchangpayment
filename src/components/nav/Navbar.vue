<script setup lang="ts">
import { paymentOptions } from "@data/paymentOptionsData";
import { activeNavbarTab } from "@state/navbarState";

import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div :class="classes.navbar">
    <NavbarCard
      v-for="{ title, description, value, iconUri, to } in paymentOptions"
      :title="title"
      :description="description"
      :value="value"
      :iconUri="iconUri"
      :isActive="route.fullPath.endsWith(to)"
      @click="(activeNavbarTab = value) && router.push(to)"
    />
  </div>
</template>

<style scoped lang="scss" module="classes">
.navbar {
  background-color: #e5e5e5;
  min-height: 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.active {
  color: var(--secondary);
}
</style>
