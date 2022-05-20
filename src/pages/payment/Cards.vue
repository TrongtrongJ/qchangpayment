<script setup lang="ts">
import { computed } from "vue";

import {
  cardPaymentOptions,
  cardPaymentOptionQuantity,
} from "../../state/payment-options/cardPaymentOptionsState";

import ExistingCardList from "../../components/partials/ExistingCardList.vue";
import EmptyClassList from "../../components/partials/EmptyCardList.vue";

const CardComponent = computed(() =>
  cardPaymentOptionQuantity.value >= 1 ? ExistingCardList : EmptyClassList
);
</script>

<template>
  <div :class="classes['cards-options-container']">
    <div :class="classes['card-options-content']">
      <component :is="CardComponent" />
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.cards-options-container {
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
}

.card-options-content {
  margin: 2rem;
}
</style>
