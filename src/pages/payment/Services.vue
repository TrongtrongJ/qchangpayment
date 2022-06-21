<script setup lang="ts">
import { computed } from "vue";
import {
  SelectServiceStep,
  InputPaymentDataStep,
} from "@components/partials/pay-by-services";

import { currentPaymentStep } from "@state/payment-options/servicePaymentOptionsState";

const PayByServiceStepComponent = computed(() => {
  switch (currentPaymentStep.value) {
    case "select-service":
      return SelectServiceStep;
    case "input-payment-data":
      return InputPaymentDataStep;
    default:
      return SelectServiceStep;
  }
});
</script>

<template>
  <div :class="classes['main-option-container']">
    <div :class="classes['main-option-content']">
      <component :is="PayByServiceStepComponent" />
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.main-option-container {
  margin-top: 1.5vmax;
  margin-bottom: 2vmax;
  width: 90vw;
  max-width: 500px;
  max-height: 500px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
}

.main-option-content {
  margin: 2rem;
}
</style>
