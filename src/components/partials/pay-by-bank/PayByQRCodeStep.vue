<script setup lang="ts">
import QRCodeVue3 from "qrcode-vue3";
import CopyOutlineRounded from "~icons/material-symbols/content-copy-outline-rounded";
import SaveOutline from "~icons/material-symbols/save-outline";
import PhShareNetwork from "~icons/ph/share-network";

import { paymentInfo } from "@state/payment-options/bankPaymentOptionsState";
</script>

<template>
  <div :class="classes['retracted-container']">
    <div :class="classes['payment-ref-id-container']">
      <div>Ref 1. {{ paymentInfo.paymentRefId }}</div>
      <div class="flex-center" :class="classes['copy-icon-container']">
        <CopyOutlineRounded />
      </div>
    </div>
    <div :class="classes['ref-2-text-container']">เลข Ref 2. คือเบอร์โทรศัพท์ของท่าน</div>
    <div class="flex-center">
      <QRCodeVue3 :width="150" :height="150" :value="paymentInfo.paymentQRCode" />
    </div>
    <div :class="classes['save-qr-code-text-container']">บันทึก QR CODE</div>
    <div :class="classes['instruction-text-container']">
      <span>กดบันทึก QR CODE และแสกนผ่าน</span
      ><span>แอพพลิเคชันของธนาคารเพื่อชำระเงิน</span>
    </div>
    <div :class="classes['barcode-container']">
      <JSBarcodeWrapper :barcode-value="paymentInfo.paymentBarcode" />
    </div>
  </div>
  <div :class="classes['action-buttons-container']">
    <button :class="classes['save-button']"><SaveOutline /> บันทึกหน้าจอนี้</button>
    <button :class="classes['share-button']"><PhShareNetwork /> แชร์หน้าจอนี้</button>
  </div>
</template>

<style scoped lang="scss" module="classes">
.retracted-container {
  display: block;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;

  .payment-ref-id-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 120%;
    padding: 0.5rem 0;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    .copy-icon-container {
      cursor: pointer;
      border-radius: 50%;
      margin-left: 10%;
      background-color: #e5e5e5;
      width: 35px;
      aspect-ratio: 1;
      text-align: center;
    }
  }

  .ref-2-text-container {
    font-size: 80%;
    font-weight: 600;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .save-qr-code-text-container {
    cursor: pointer;
    margin-top: 0.8rem;
    text-align: center;
    font-weight: 700;
    color: #efc920;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #f0f0f0;
  }

  .instruction-text-container {
    font-size: 80%;
    > span {
      margin: 0.3rem;
      display: block;
      text-align: center;
      font-weight: 600;
    }
  }

  .barcode-container {
    height: 42px;
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
    height: 2.3rem;
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
