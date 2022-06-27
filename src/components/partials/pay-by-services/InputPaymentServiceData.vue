<script setup lang="ts">
import SaveOutline from "~icons/material-symbols/save-outline";
import PhShareNetwork from "~icons/ph/share-network";
import RiErrorWarningFill from "~icons/ri/error-warning-fill";

import {
  selectedServiceOption,
  selectedServiceType,
  servicePaymentQrCode,
  servicePaymentPhoneNo,
  isPaymentPhoneNoTouched,
  isPaymentPhoneNoError,
  paymentPhoneNoErrorMsg,
} from "@state/payment-options/servicePaymentOptionsState";

import { stringifiedTransactionValue } from "@state/transaction/currentTransactionState";
</script>

<template>
  <div :class="classes['main-container']">
    <div v-if="selectedServiceType === 'counter-service'">
      <div :class="classes['service-details-container']">
        <div :class="classes['service-icon-container']">
          <img :src="selectedServiceOption.iconUri" :alt="selectedServiceOption.name" />
        </div>
        <div :class="classes['service-info-text-container']">
          <div>{{ selectedServiceOption.name }}</div>
          <div>ฟรีค่าธรรมเนียม</div>
        </div>
      </div>
      <hr :class="classes.divider" />
      <div :class="classes['retracted-container']">
        <div :class="classes['payment-instruction-container']">
          <div>แจ้งแคชเชียร์ว่า "ชำระเงินออนไลน์"</div>
          <div>แล้วให้แสกนบาร์โค้ดนี้</div>
        </div>
        <div :class="classes['barcode-container']" class="flex-center">
          <JSBarcodeWrapper
            :height="60"
            :width="2"
            :ref-id="'service-payment-qr-code'"
            :barcode-value="servicePaymentQrCode"
          />
        </div>
      </div>
      <hr :class="classes.divider" />
      <div :class="classes['action-buttons-container']">
        <button :class="classes['save-button']"><SaveOutline /> บันทึกหน้าจอนี้</button>
        <button :class="classes['share-button']"><PhShareNetwork /> แชร์หน้าจอนี้</button>
      </div>
    </div>
    <div v-else :class="classes['flex-justify-between']">
      <div>
        <div :class="[classes['service-details-container'], classes['is-e-wallet']]">
          <div :class="[classes['service-icon-container'], classes['is-e-wallet']]">
            <img :src="selectedServiceOption.iconUri" :alt="selectedServiceOption.name" />
          </div>
          <div :class="classes['service-info-text-container']">
            <div>{{ selectedServiceOption.name }}</div>
            <div :class="classes['is-large-text']">
              โปรดใส่เบอร์ที่ผูกบัญชีไว้กับ True Money
            </div>
          </div>
        </div>
        <hr :class="classes.divider" />
        <div :class="classes['e-wallet-input-container']">
          <div :class="[classes['form-input'], isPaymentPhoneNoError && classes.error]">
            <label :class="classes['form-input-label']">เบอร์โทรศัพท์ (10หลัก)</label>
            <input
              @focus="isPaymentPhoneNoTouched = true"
              v-model="servicePaymentPhoneNo"
              placeholder="กรุณากรอกเบอร์ที่ผูกบัญชีไว้กับ True Money"
              :class="[
                classes['phone-number-input'],
                isPaymentPhoneNoError && classes.error,
              ]"
              type="text"
            />
            <label :class="classes['form-error-description']"
              ><RiErrorWarningFill :class="classes['warning-icon']" />
              {{ paymentPhoneNoErrorMsg }}</label
            >
          </div>
        </div>
        <hr :class="classes.divider" />
      </div>
      <div :class="classes['action-buttons-container']">
        <button :class="classes['pay-button']">
          ชำระเงิน {{ stringifiedTransactionValue }} บาท
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.main-container {
  margin: -1rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.flex-justify-between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
}

.divider {
  width: 70%;
  border: 0;
  border-top: 1px solid #e5e5e5;
}

.e-wallet-input-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0 2.5rem 0;

  .form-input:not(.error) {
    .form-error-description {
      display: none;
    }
  }

  .form-input-label {
    font-size: 80%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 3;
    font-size: 85%;
  }

  label,
  input {
    display: block;
  }

  .phone-number-input {
    width: 280px;
    line-height: 2.2;
    border-radius: 4px;
    border-width: 1px;
    text-indent: 0.25rem;

    &.error {
      outline-color: #de3031;
      border-color: #de3031;
      background-color: #ffeaec;
    }

    :focus {
      outline: none;
    }
  }
  ::placeholder {
    font-family: "sarabun";
    font-size: 90%;
    line-height: 2;
  }

  .form-error-description {
    position: relative;
    left: 1rem;
    font-size: 70%;
    line-height: 0;
    transform: translateY(1rem);
    font-weight: 600;
    color: #c83126;

    > span {
      color: #c83126;
    }

    .warning-icon {
      top: 0;
      left: -1rem;
      position: absolute;
      vertical-align: middle;
      transform: translateY(-0.3rem);
    }
  }
}

.service-details-container {
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: flex-start;
  align-items: center;

  &.is-e-wallet {
    width: 100%;
    margin: 0.5rem 0;
  }
  .service-icon-container {
    height: 70px;
    &.is-e-wallet {
      height: 60px;
    }
    aspect-ratio: 1;
    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .service-info-text-container {
    margin-left: 0.6rem;
    font-size: 70%;
    color: #a8a8a8;

    :first-child {
      color: black;
      font-size: 160%;
      font-weight: 700;
    }

    .is-large-text {
      font-size: 160%;
      color: black;
      font-weight: 900;
    }
  }
}
.retracted-container {
  display: block;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;

  .payment-instruction-container {
    display: flex;
    flex-direction: column;
    > div {
      font-size: 70%;
      font-weight: 600;
      margin: 0.2rem auto;
    }
    margin-bottom: 1rem;
  }

  .barcode-container {
    height: 62px;
  }
}

.action-buttons-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  > button {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;
    width: 50%;
    color: white;
    font-size: 75%;
    font-weight: 500;

    :first-child {
      transform: translateY(0.05rem);
      margin-right: 0.5rem;
      font-size: 100%;
    }
  }
  .save-button {
    background-color: var(--primary);
    margin-right: 1rem;
  }

  .share-button {
    background-color: var(--secondary);
  }

  .pay-button {
    display: block;
    width: 100%;
    background-color: var(--secondary);
  }
}
</style>
