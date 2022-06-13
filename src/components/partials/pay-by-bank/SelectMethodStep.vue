<script setup lang="ts">
import {
  selectedBankOption,
  selectedBankPaymentMethod,
  proceedWithPaymentHandler,
} from "@state/payment-options/bankPaymentOptionsState";
import { stringifiedTransactionValue } from "@state/transaction/currentTransactionState";
</script>
<template>
  <div :class="classes['main-content-flex-wraper']">
    <div :class="classes['select-method-container']">
      <div :class="classes['selected-bank-info']">
        <div>
          <div
            :class="classes['bank-icon']"
            :style="`background-color: ${selectedBankOption.backgroundColor};`"
          >
            <img :src="selectedBankOption.iconUri" :alt="selectedBankOption.name" />
          </div>
          <div :class="classes['bank-name']">{{ selectedBankOption.name }}</div>
        </div>
        <div :class="classes['info-link-text']">ดูขั้นตอนการชำระเงิน</div>
      </div>
      <hr :class="classes.divider" />
      <div
        @click="selectedBankPaymentMethod = 'atm'"
        :class="classes['method-container']"
      >
        <div>
          <input
            type="checkbox"
            :checked="selectedBankPaymentMethod === 'atm'"
            :class="classes['checkbox']"
          /><span :class="classes['checkbox-control']" />
        </div>
        <div>ตู้ ATM</div>
      </div>
      <hr :class="classes.divider" />
      <div
        @click="selectedBankPaymentMethod = 'counter'"
        :class="classes['method-container']"
      >
        <div>
          <input
            type="checkbox"
            :checked="selectedBankPaymentMethod === 'counter'"
            :class="classes['checkbox']"
          /><span :class="classes['checkbox-control']" />
        </div>
        <div>เคาน์เตอร์ธนาคาร</div>
      </div>
    </div>

    <button @click="proceedWithPaymentHandler()" :class="classes['confirm-button']">
      ชำระเงิน {{ stringifiedTransactionValue }} บาท
    </button>
  </div>
</template>
<style scoped lang="scss" module="classes">
.main-content-flex-wraper {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  flex-direction: column;
}

.select-method-container {
  .selected-bank-info {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :first-child {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .bank-icon {
      height: 50px;
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

    .info-link-text {
      font-size: 95%;
      text-decoration: underline;
      cursor: pointer;
      color: #1391df;
    }
  }

  .method-container {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0;
    font-weight: 600;
  }
  .divider {
    border: 0;
    border-top: 1px solid #e5e5e5;
  }
}

.confirm-button {
  cursor: pointer;
  margin-bottom: 1rem;
  height: 2.5rem;
  border-radius: 8px;
  width: 100%;
  color: white;
  background-color: var(--secondary);
  border-width: 0;
}

.checkbox {
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

.checkbox:checked + .checkbox-control:after {
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

.checkbox:checked + .checkbox-control {
  border-color: var(--primary);
}
</style>
