<script setup lang="ts">
import { selectBankOptionHandler } from "@state/payment-options/bankPaymentOptionsState";

import { bankOptions } from "@data/bankOptionsData";

import IcRoundKeyboardArrowRight from "~icons/ic/round-keyboard-arrow-right";
</script>

<template>
  <div>
    <template v-for="({ name, iconUri, backgroundColor, value }, idx) of bankOptions">
      <div
        class="pointer-cursor"
        :class="classes['bank-option-row']"
        @click="selectBankOptionHandler(value)"
      >
        <div>
          <div
            :class="classes['bank-icon']"
            :style="`background-color: ${backgroundColor};`"
          >
            <img :src="iconUri" :alt="name" />
          </div>
          <div :class="classes['bank-name']">{{ name }}</div>
        </div>
        <div :class="classes['bank-option-cursor-btn']">
          <IcRoundKeyboardArrowRight />
        </div>
      </div>
      <hr :class="classes['bank-option-divider']" v-if="idx !== bankOptions.length - 1" />
    </template>
  </div>
</template>

<style scoped lang="scss" module="classes">
.bank-option-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5rem;
  padding: 0.2rem 0;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    .bank-icon {
      height: 40px;
      aspect-ratio: 1;
      border-radius: 6px;
      overflow: hidden;
      padding: 0.1rem;
      > img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .bank-name {
      margin-left: 1rem;
      font-weight: 600;
    }
  }

  .bank-option-cursor-btn {
    margin-right: 0.5rem;
    font-size: 140%;
  }
}

.bank-option-divider {
  border: 0;
  border-top: 1px solid #e5e5e5;
}
</style>
