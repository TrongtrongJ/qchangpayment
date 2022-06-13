<script setup lang="ts">
import { computed } from "vue";
import {
  SelectBankStep,
  SelectMethodStep,
  PayByQrCodeStep,
} from "@components/partials/pay-by-bank";

import { currentPaymentStep } from "@state/payment-options/bankPaymentOptionsState";

const PayByBankStepComponent = computed(() => {
  switch (currentPaymentStep.value) {
    case "select-bank":
      return SelectBankStep;
    case "select-method":
      return SelectMethodStep;
    case "pay":
      return PayByQrCodeStep;
  }
});
</script>

<template>
  <div :class="classes['main-option-container']">
    <div :class="classes['main-option-content']">
      <template v-if="currentPaymentStep !== 'pay'">
        <div :class="classes['main-title-container']"><h1>ชำระค่าบริการ</h1></div>
        <div :class="classes['sub-title-container']">เงินโอน/ QR code</div>
        <div :class="classes['main-content-container']">
          <component :is="PayByBankStepComponent" />
        </div>
      </template>
      <template v-else>
        <PayByQrCodeStep />
      </template>
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

  .main-title-container {
    color: var(--primary);
    font-size: 85%;
  }

  .sub-title-container {
    color: #898989;
  }

  .main-content-container {
    box-sizing: border-box;
    margin: 2rem 0;
    height: 360px;
    flex-direction: column;
  }
}
</style>
