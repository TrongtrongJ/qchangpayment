<script setup lang="ts">
import { serviceOptions } from "@data/serviceOptionsData";
import { selectServiceOptionHandler } from "@state/payment-options/servicePaymentOptionsState";
import IcRoundKeyboardArrowRight from "~icons/ic/round-keyboard-arrow-right";

const counterServiceOptions = serviceOptions.filter(
  (so) => so.type === "counter-service"
);
const eWalletServiceOptions = serviceOptions.filter((so) => so.type === "e-wallet");
</script>

<template>
  <div :class="classes['main-title-container']"><h1>ชำระค่าบริการ</h1></div>
  <div :class="classes['main-content-container']">
    <div :class="classes['sub-title-container']">เคาน์เตอร์เซอร์วิส</div>
    <template v-for="{ name, value, iconUri, type } of counterServiceOptions">
      <div @click="selectServiceOptionHandler(value)" :class="classes['service-option']">
        <div>
          <div :class="classes['service-icon-container']">
            <img :src="iconUri" />
          </div>
          <div>{{ name }}</div>
        </div>
        <div :class="classes['service-option-cursor-btn']">
          <IcRoundKeyboardArrowRight />
        </div>
      </div>
      <hr :class="classes['service-option-divider']" />
    </template>
    <div :class="classes['sub-title-container']">E-Wallet</div>
    <template v-for="{ name, value, iconUri, type } of eWalletServiceOptions">
      <div @click="selectServiceOptionHandler(value)" :class="classes['service-option']">
        <div>
          <div :class="classes['service-icon-container']">
            <img :src="iconUri" />
          </div>
          <div>{{ name }}</div>
        </div>
        <div :class="classes['service-option-cursor-btn']">
          <IcRoundKeyboardArrowRight />
        </div>
      </div>
      <hr :class="classes['service-option-divider']" />
    </template>
  </div>
</template>

<style scoped lang="scss" module="classes">
.main-title-container {
  color: var(--primary);
  font-size: 85%;
}

.sub-title-container {
  color: #898989;
  margin: 1rem 0;
}

.main-content-container {
  box-sizing: border-box;
  margin: 2rem 0;
  height: 360px;
  flex-direction: column;

  .service-option {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 600;

      :first-child {
        margin-right: 1rem;
      }
    }

    .service-icon-container {
      height: 40px;
      aspect-ratio: 1;
      > img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .service-option-cursor-btn {
      margin-right: 0.5rem;
      font-size: 140%;
    }
  }
  .service-option-divider {
    border: 0;
    border-top: 1px solid #e5e5e5;
  }
}
</style>
