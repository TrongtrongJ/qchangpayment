<script setup lang="ts">
import { bankOptions } from "@data/bankOptionsData";

import IcRoundKeyboardArrowRight from "~icons/ic/round-keyboard-arrow-right";
</script>

<template>
  <div :class="classes['main-option-container']">
    <div :class="classes['main-option-content']">
      <div :class="classes['main-title-container']"><h1>ชำระค่าบริการ</h1></div>
      <div :class="classes['sub-title-container']">เงินโอน/ QR code</div>
      <div :class="classes['main-content-container']">
        <template v-for="({ name, iconUri, backgroundColor }, idx) of bankOptions">
          <div :class="classes['bank-option-row']">
            <div>
              <div
                :class="classes['bank-icon']"
                :style="`background-color: ${backgroundColor};`"
              >
                <img :src="iconUri" :alt="name" />
              </div>
              <div :class="classes['bank-name']">{{ name }}</div>
            </div>
            <div class="pointer-cursor" :class="classes['bank-option-cursor-btn']">
              <IcRoundKeyboardArrowRight />
            </div>
          </div>
          <hr
            :class="classes['bank-option-divider']"
            v-if="idx !== bankOptions.length - 1"
          />
        </template>
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

.main-option-content {
  margin: 2rem;

  .main-title-container {
    color: var(--primary);
    font-size: 85%;
  }

  .sub-title-container {
    color: #898989;
  }

  .main-content-container {
    box-sizing: border-box;
    margin: 2rem 0;
    height: 360px;
    flex-direction: column;

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
  }
}
</style>
