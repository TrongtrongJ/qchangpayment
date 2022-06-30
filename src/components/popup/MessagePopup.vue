<script setup lang="ts">
import RiErrorWarningFill from "~icons/ri/error-warning-fill";

import {
  isErrorMassagePopupActive,
  popupErrorMessage,
  clearErrorMessage,
} from "@state/popup/errorMessageState";
</script>

<template>
  <Transition name="from-top" mode="in-out">
    <div v-if="isErrorMassagePopupActive" :class="classes['message-popup-outer']">
      <div :class="classes['message-popup-inner']">
        <div :class="classes['message-popup-content-container']">
          <div class="flex-center" :class="classes['message-icon-container']">
            <RiErrorWarningFill />
          </div>
          <div :class="classes['message-text-container']">
            <div :class="classes.title">
              {{ popupErrorMessage.title }}
            </div>
            <div :class="classes.subtitle">{{ popupErrorMessage.subtitle }}</div>
          </div>
        </div>
        <div @click="clearErrorMessage()" :class="classes['close-modal-button']">
          &#10005;
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss" module="classes">
.message-popup-outer {
  position: absolute;
  top: 1.5rem;
  z-index: 10;
  background-color: white;
  border-radius: 4px;
  border-left: 0.3rem solid #d91616;
  height: 54px;
  min-width: 400px;
  width: 30%;
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .message-popup-inner {
    margin: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .message-popup-content-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .message-icon-container {
        color: #d91616;
        font-size: 120%;
        transform: translateY(0.1rem);
      }

      .message-text-container {
        margin-left: 0.7rem;
        > div {
          font-size: 80%;
        }
        .title {
          font-weight: 600;
          color: #d91616;
        }
        .subtitle {
          color: #b8b8b8;
          margin-top: 0.1rem;
        }
      }
    }

    .close-modal-button {
      color: #b8b8b8;
      cursor: pointer;
    }
  }
}
</style>
