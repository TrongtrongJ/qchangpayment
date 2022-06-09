<script setup lang="ts">
import QRCodeVue3 from "qrcode-vue3";

import {
  paymentBarcode,
  paymentQRCode,
} from "@state/payment-options/bankPaymentOptionsState";
</script>
<template>
  <div>
    <div><QRCodeVue3 :value="paymentQRCode" /></div>
    <div></div>
  </div>
</template>
<style scoped lang="scss" module="classes"></style>
