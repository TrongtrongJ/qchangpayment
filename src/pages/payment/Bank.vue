<script setup lang="ts">
import { bankOptions } from "@data/bankOptionsData";
import {
  currentPaymentStep,
  selectBankOptionHandler,
  selectedBankOption,
  selectedBankPaymentMethod,
} from "@state/payment-options/bankPaymentOptionsState";
import { stringifiedTransactionValue } from "@state/transaction/currentTransactionState";

import IcRoundKeyboardArrowRight from "~icons/ic/round-keyboard-arrow-right";
</script>

<template>
  <div :class="classes['main-option-container']">
    <div :class="classes['main-option-content']">
      <div :class="classes['main-title-container']"><h1>ชำระค่าบริการ</h1></div>
      <div :class="classes['sub-title-container']">เงินโอน/ QR code</div>
      <div :class="classes['main-content-container']">
        <div
          :class="
            currentPaymentStep !== 'select-bank' && classes['main-content-flex-wraper']
          "
        >
          <template
            v-if="currentPaymentStep === 'select-bank'"
            v-for="({ name, iconUri, backgroundColor, value }, idx) of bankOptions"
          >
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
            <hr
              :class="classes['bank-option-divider']"
              v-if="idx !== bankOptions.length - 1"
            />
          </template>
          <template v-else>
            <div :class="classes['select-method-container']">
              <div :class="classes['selected-bank-info']">
                <div>
                  <div
                    :class="classes['bank-icon']"
                    :style="`background-color: ${selectedBankOption.backgroundColor};`"
                  >
                    <img
                      :src="selectedBankOption.iconUri"
                      :alt="selectedBankOption.name"
                    />
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

            <button :class="classes['confirm-button']">
              ชำระเงิน {{ stringifiedTransactionValue }} บาท
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.main-option-container {
  margin-top: 1.5vmax;
  margin-bottom: 2vmax;
  width: 90vw;
  max-width: 500px;
  max-height: 500px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
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

.main-option-content {
  margin: 2rem;

  .main-title-container {
    color: var(--primary);
    font-size: 85%;
  }

  .sub-title-container {
    color: #898989;
  }

  .main-content-flex-wraper {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .main-content-container {
    box-sizing: border-box;
    margin: 2rem 0;
    height: 360px;
    flex-direction: column;

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
  }
}
</style>
