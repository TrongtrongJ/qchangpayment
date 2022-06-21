<script setup lang="ts">
import CopyOutlineRounded from "~icons/material-symbols/content-copy-outline-rounded";
import SaveOutline from "~icons/material-symbols/save-outline";
import PhShareNetwork from "~icons/ph/share-network";

import {
  selectedServiceOption,
  servicePaymentQrCode,
} from "@state/payment-options/servicePaymentOptionsState";
</script>

<template>
  <div :class="classes['main-container']">
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

.divider {
  width: 50%;
  border: 0;
  border-top: 1px solid #e5e5e5;
}

.service-details-container {
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: flex-start;
  align-items: center;
  .service-icon-container {
    height: 70px;
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
}
</style>
