<script setup lang="ts">
import { paymentOptions } from "@data/paymentOptionsData";
import { activeNavbarTab } from "@state/navbarState";

import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div :class="classes.navbar">
    <div>
      <NavbarCard
        v-for="{ title, description, value, iconUri, to } in paymentOptions.slice(0, 2)"
        :title="title"
        :description="description"
        :value="value"
        :iconUri="iconUri"
        :isActive="route.fullPath.endsWith(to)"
        @click="(activeNavbarTab = value) && router.push(to)"
      />
    </div>
    <div>
      <NavbarCard
        v-for="{ title, description, value, iconUri, to } in paymentOptions.slice(2, 4)"
        :title="title"
        :description="description"
        :value="value"
        :iconUri="iconUri"
        :isActive="route.fullPath.endsWith(to)"
        @click="(activeNavbarTab = value) && router.push(to)"
      />
    </div>
    <!--<NavbarCard
      v-for="{ title, description, value, iconUri, to } in paymentOptions"
      :title="title"
      :description="description"
      :value="value"
      :iconUri="iconUri"
      :isActive="route.fullPath.endsWith(to)"
      @click="(activeNavbarTab = value) && router.push(to)"
    />-->
  </div>
</template>

<style scoped lang="scss" module="classes">
.navbar {
  background-color: #e5e5e5;
  min-height: 120px;
  width: 100%;
  display: flex;
  flex-basis: content;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > div {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: content;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
  }
}

.active {
  color: var(--secondary);
}

@media screen and (max-width: 1023px) {
  .navbar {
    > div {
      max-width: 720px;
    }
  }
}
</style>
