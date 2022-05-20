<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <AddNewCardModal />
  <Header />
  <Navbar />
  <div class="content-container">
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="route.fullPath" />
    </RouterView>
  </div>
</template>

<style></style>
