<script setup lang="ts">
import { Component } from "vue";
import VisaCardIcon from "../icons/visa-card-icon-svg.vue";
import MasterCardIcon from "../icons/mastercard-card-icon-svg.vue";

import {
  cardPaymentOptions,
  cardPaymentOptionQuantity,
} from "../../state/payment-options/cardPaymentOptionsState";
</script>

<template>
  <div :class="classes['card-title-container']">
    <h1 :class="classes.title">ข้อมูลบัตรเครดิต/เดบิต</h1>
  </div>
  <div :class="classes['card-options-meta-container']">
    <div>รายชื่อข้อมูลบัตรทั้งหมด {{ cardPaymentOptionQuantity }} รายการ</div>
    <div>
      <button class="pointer-cursor" :class="classes['add-card-button']">
        + เพิ่มบัตรเครดิต/เดบิตใหม่
      </button>
    </div>
  </div>
  <div :class="classes['cards-container']">
    <div v-for="card in cardPaymentOptions" :class="classes['payment-card-container']">
      <div><input type="checkbox" :class="classes['card-checkbox']" /></div>
      <div>
        <VisaCardIcon v-if="card.cardType.toLowerCase() === 'visa'" />
        <MasterCardIcon v-else />
      </div>
      <div :class="classes['card-code']">
        &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
        &#9679;&#9679;&#9679;&#9679; {{ card.cardCode.substring(12, 16) }}
      </div>
      <div :class="classes['card-default-label']">&#9733; บัตรเริ่มต้น</div>
    </div>
  </div>
  <div :class="classes['submit-button-container']">
    <button class="pointer-cursor" :class="classes['submit-button']">
      ชำระเงิน 1,200 บาท
    </button>
  </div>
</template>

<style scoped lang="scss" module="classes">
.card-title-container {
  display: block;
  padding-bottom: 1rem;
  .title {
    color: #014672;
    font-size: 130%;
    font-weight: 800;
  }
}

.card-options-meta-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.add-card-button {
  background-color: #014672;
  border-width: 0px;
  border-radius: 8px;
  width: 180px;
  height: 35px;
  color: white;
  font-size: 70%;
  font-weight: 500;
}

.cards-container {
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  height: 320px;
  line-height: 1.5rem;

  .payment-card-container {
    > div {
      display: inline-block;
      text-align: center;
      vertical-align: middle;
    }

    .card-checkbox {
      width: 1rem;
      height: 1rem;
      appearance: none;
      border: 1px solid black;
      cursor: pointer;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    .card-code {
      margin-left: 1rem;
      font-size: 85%;
    }

    .card-default-label {
      margin-left: 1rem;
      padding: 0 10px 0 10px;
      font-size: 65%;
      font-weight: 600;
      border-radius: 4px;
      background-color: #fefde6;
      color: #bf9e0b;
    }
  }
}

.submit-button-container {
  .submit-button {
    background-color: #f04d2f;
    border-width: 0px;
    border-radius: 8px;
    width: 180px;
    height: 35px;
    color: white;
    font-size: 70%;
    font-weight: 600;
    width: 100%;
  }
}
</style>
