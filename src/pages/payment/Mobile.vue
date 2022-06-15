<script setup lang="ts">
import { baseUri } from "@data/appContextData";
import IcRoundKeyboardArrowRight from "~icons/ic/round-keyboard-arrow-right";

const appIconsUri = `${baseUri}/app-icons/`;
</script>

<template>
  <div :class="classes['main-option-container']">
    <div :class="classes['main-option-content']">
      <div :class="classes['main-title-container']"><h1>ชำระค่าบริการ</h1></div>
      <div :class="classes['sub-title-container']">เงินโอน/ QR code</div>
      <div :class="classes['main-content-container']">
        <div :class="classes['app-option']">
          <div>
            <div :class="classes['app-icon-container']">
              <img :src="appIconsUri + 'k-plus-icon.png'" alt="K Plus" />
            </div>
            <div>K Plus</div>
          </div>
          <div :class="classes['app-option-cursor-btn']">
            <IcRoundKeyboardArrowRight />
          </div>
        </div>
        <hr :class="classes['app-option-divider']" />
        <div :class="classes['app-option']">
          <div>
            <div :class="classes['app-icon-container']">
              <img :src="appIconsUri + 'scb-easy-icon.png'" alt="SCB Easy" />
            </div>
            <div>SCB Easy</div>
          </div>
          <div :class="classes['app-option-cursor-btn']">
            <IcRoundKeyboardArrowRight />
          </div>
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

    .app-option {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        :first-child {
          margin-right: 1rem;
        }
      }

      .app-icon-container {
        height: 40px;
        aspect-ratio: 1;
        > img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .app-option-cursor-btn {
        margin-right: 0.5rem;
        font-size: 140%;
      }
    }

    .app-option-divider {
      border: 0;
      border-top: 1px solid #e5e5e5;
    }
  }
}
</style>
