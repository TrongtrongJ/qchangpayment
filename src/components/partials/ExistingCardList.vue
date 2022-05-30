<script setup lang="ts">
import { minifycardTypeName } from "@src/utils/card.util";

import {
  VisaCardIcon,
  MastercardCardIcon,
  UnionpayCardIcon,
  JcbCardIcon,
} from "@src/components/icons";

import {
  selectedCardIndex,
  cardPaymentOptions,
  cardPaymentOptionQuantity,
} from "@state/payment-options/cardPaymentOptionsState";

import { isModalActive } from "@state/payment-options/addNewCardState";

function getCardIconComponent(cardTypeName: string) {
  switch (minifycardTypeName(cardTypeName)) {
    case "visa":
      return VisaCardIcon;
    case "mastercard":
      return MastercardCardIcon;
    case "unionpay":
      return UnionpayCardIcon;
    case "jcb":
      return JcbCardIcon;
  }
}
</script>

<template>
  <div :class="classes['card-title-container']">
    <h1 :class="classes.title">ข้อมูลบัตรเครดิต/เดบิต</h1>
  </div>
  <div :class="classes['card-options-meta-container']">
    <div>รายชื่อข้อมูลบัตรทั้งหมด {{ cardPaymentOptionQuantity }} รายการ</div>
    <div>
      <button
        @click="isModalActive = true"
        class="pointer-cursor"
        :class="classes['add-card-button']"
      >
        + เพิ่มบัตรเครดิต/เดบิตใหม่
      </button>
    </div>
  </div>
  <div :class="classes['cards-container-padded']">
    <div :class="classes['cards-container']">
      <div
        v-for="({ cardCode, cardType, isDefault }, cardIdx) in cardPaymentOptions"
        :class="classes['payment-card-container']"
      >
        <div @click="selectedCardIndex = cardIdx" class="pointer-cursor">
          <input
            type="checkbox"
            :checked="selectedCardIndex === cardIdx"
            :class="classes['card-checkbox']"
          /><span :class="classes['checkbox-control']" />
        </div>
        <div :class="classes['card-provider-icon-container']">
          <component
            :is="getCardIconComponent(cardType)"
            :class="classes['card-provider-icon']"
          />
        </div>
        <div :class="classes['card-code']">
          &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
          &#9679;&#9679;&#9679;&#9679; {{ cardCode.substring(12, 16) }}
        </div>
        <div v-if="isDefault" :class="classes['card-default-label']">
          &#9733; บัตรเริ่มต้น
        </div>
        <hr :class="classes['payment-card-divider']" />
      </div>
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
    color: var(--primary);
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
  background-color: var(--primary);
  border-width: 0px;
  border-radius: 8px;
  width: 180px;
  height: 35px;
  color: white;
  font-size: 70%;
  font-weight: 500;
}

.cards-container-padded {
  height: 290px;
  margin: 1rem auto 1rem auto;
  overflow-y: scroll;
}

.cards-container {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  line-height: 1.5rem;

  .payment-card-container {
    > div {
      display: inline-block;
      margin: 0.5rem;
      text-align: center;
      vertical-align: middle;
    }

    .card-checkbox {
      font-size: 1rem;
      line-height: 1.5;
      appearance: none;
      border-radius: 0;
      outline: 0;
      background-color: transparent;
      box-sizing: border-box;
      padding: 0;
    }

    .checkbox-control {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      transform: translateX(-50%) scale(0.6);
      vertical-align: middle;
      background-color: inherit;
      color: var(--primary);
      border: 2px solid #666;
      border-radius: 24px;
    }

    .card-checkbox:checked + .checkbox-control:after {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: var(--primary);
      border-radius: 12px;
    }

    .card-checkbox:checked + .checkbox-control {
      border-color: var(--primary);
    }

    .card-provider-icon-container {
      background-color: #e2f2ff;
      border-radius: 6px;
      height: 35px;
      width: 35px;
      .card-provider-icon {
        transform: translateY(10%);
        height: 28px;
        width: 28px;
      }
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
      color: var(--highlight);
    }
  }

  .payment-card-divider {
    border: 0;
    border-top: 1px solid #e5e5e5;
  }
}

.submit-button-container {
  .submit-button {
    background-color: var(--secondary);
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
