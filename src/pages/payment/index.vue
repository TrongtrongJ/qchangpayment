<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  router.push("/payment/cards");
});
</script>

<template>
  <RouterView> </RouterView>
</template>
