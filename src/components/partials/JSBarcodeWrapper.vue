<script setup lang="ts">
import { reactive, computed, onMounted } from "vue";
import JSBarcode from "jsbarcode";

const props = defineProps<{
  refId: string;
  format: string;
  barcodeValue: string;
  displayValue: boolean;
  margin: number;
  width: number;
}>();

const defaultProps = {
  refId: "jsbarcode",
  format: "CODE128",
  displayValue: false,
  margin: 3,
  width: 1,
};

onMounted(() => {
  JSBarcode(`#${props.refId}`, props.barcodeValue, { ...props, ...defaultProps });
});
</script>

<template>
  <div :class="classes['main-container']">
    <div :class="classes['barcode-container']">
      <div :class="classes['barcode-sizing-container']">
        <canvas :id="`${props.refId}`"></canvas>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped module="classes">
.main-container {
  width: 100%;
}

.barcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.barcode-sizing-container {
  width: auto;
}
</style>
