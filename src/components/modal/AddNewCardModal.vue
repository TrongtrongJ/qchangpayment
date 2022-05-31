<script setup lang="ts">
import { ref } from "vue";
import { isChar } from "@src/utils";
import RiErrorWarningFill from "~icons/ri/error-warning-fill";
import MdiEye from "~icons/mdi/eye";
import MdiEyeOff from "~icons/mdi/eye-off";
import {
  isModalActive,
  cardFormData,
  cardCodeDisplayData,
  cardSettings,
  isFormValid,
  cardFormWasTouched,
  cardFormErrors,
  capitalizeCardHolderName,
  formatExpiration,
  formatCardCode,
  cardInputFormatIsPassword,
} from "@state/payment-options/addNewCardState";

import { decodeHTMLEntity } from "@utils/html-entity-encoder.util";

function cardCodeKeyPressHandler(event: any) {
  const { key } = event;
  if (isChar(key)) {
    cardFormData.cardCode += key;
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  const cardFormDataCardCode = cardFormData.cardCode;
  cardFormData.cardCode = cardFormDataCardCode.slice(
    0,
    cardFormData.cardCode.slice(-1) === " " ? -2 : -1
  );
  return true;
}

function getEyeIcon(InputDisplayFormatIsPassword: boolean) {
  return InputDisplayFormatIsPassword ? MdiEyeOff : MdiEye;
}
</script>

<template>
  <div :class="[classes.modal, isModalActive && classes.show]">
    <div :class="[classes['modal-content-container'], isModalActive && classes.show]">
      <div :class="classes['modal-section-content']">
        <div :class="classes['modal-header']">
          <div><h1 :class="classes['modal-title']">เพิ่มข้อมูลบัตร</h1></div>
          <div
            class="pointer-cursor"
            @click="isModalActive = false"
            :class="classes['close-modal-button']"
          >
            &#10005;
          </div>
        </div>
      </div>
      <hr :class="classes['section-divider']" />
      <div :class="classes['modal-form-section']">
        <div :class="classes['modal-form-container']">
          <div
            :class="[
              classes['form-input'],
              cardFormErrors.cardHolderName && classes.error,
            ]"
          >
            <label>ชื่อที่ปรากฏบนบัตร<span>*</span></label
            ><input
              @focus="cardFormWasTouched.cardHolderName = true"
              @keyup="capitalizeCardHolderName()"
              v-model="cardFormData.cardHolderName"
              type="text"
              placeholder="กรอกชื่อที่ปรากฏบนบัตร"
            />
            <label :class="classes['form-error-description']"
              ><RiErrorWarningFill :class="classes['warning-icon']" />
              โปรดใส่ชื่อ-สกุล</label
            >
          </div>
        </div>
        <div :class="classes['modal-form-container']">
          <div :class="[classes['form-input'], cardFormErrors.cardCode && classes.error]">
            <label>หมายเลขบัตร<span>*</span></label
            ><input
              @focus="cardFormWasTouched.cardCode = true"
              @keyup="formatCardCode()"
              :value="
                cardCodeDisplayData.type === 'password'
                  ? cardCodeDisplayData.str
                      .split(' ')
                      .map(
                        (chunk) => `${decodeHTMLEntity('&#9679;').repeat(chunk.length)}`
                      )
                      .join(' ')
                  : cardCodeDisplayData.str
              "
              @keydown="($event: any) => cardCodeKeyPressHandler($event)"
              type="text"
              placeholder="`&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;`"
            />
            <component
              @click="
                cardInputFormatIsPassword.cardCode = !cardInputFormatIsPassword.cardCode
              "
              :is="getEyeIcon(cardInputFormatIsPassword.cardCode)"
              :class="classes['eye-icon']"
            />
            <label :class="classes['form-error-description']"
              ><RiErrorWarningFill :class="classes['warning-icon']" />
              หมายเลขบัตรไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง</label
            >
          </div>
        </div>
        <div :class="classes['modal-form-row']">
          <div :class="classes['modal-form-container']">
            <div
              :class="[classes['form-input'], cardFormErrors.expiration && classes.error]"
            >
              <label>วันหมดอายุ<span>*</span></label
              ><input
                @focus="cardFormWasTouched.expiration = true"
                @keyup="formatExpiration()"
                v-model="cardFormData.expiration"
                type="string"
                placeholder="MM/YY"
              />
              <label :class="classes['form-error-description']"
                ><RiErrorWarningFill :class="classes['warning-icon']" />
                กรุณากรอกวันหมดอายุบัตร</label
              >
            </div>
          </div>
          <div :class="classes['modal-form-container']">
            <div :class="[classes['form-input'], cardFormErrors.CVV && classes.error]">
              <label>CVV<span>*</span></label
              ><input
                @focus="cardFormWasTouched.CVV = true"
                v-model="cardFormData.CVV"
                type="password"
                placeholder="&#9679;&#9679;&#9679;"
              />
              <component
                @click="cardInputFormatIsPassword.CVV = !cardInputFormatIsPassword.CVV"
                :is="getEyeIcon(cardInputFormatIsPassword.CVV)"
                :class="classes['eye-icon']"
              />
              <label :class="classes['form-error-description']"
                ><RiErrorWarningFill :class="classes['warning-icon']" />
                กรุณากรอกเลขCVVหลังบัตร</label
              >
            </div>
          </div>
        </div>
      </div>
      <div :class="classes['modal-section-content']">
        <div :class="classes['modal-toggle-row']">
          บันทึกบัตรใบนี้
          <input
            type="checkbox"
            id="remember-card-switch"
            v-model="cardSettings.addToCardList"
          /><label for="remember-card-switch"></label>
        </div>

        <hr :class="classes['sub-section-divider']" />
        <div :class="classes['modal-toggle-row']">
          <span :class="classes['bold-label']">ตั้งค่าเป็นบัตรหลักในการชำระเงิน</span>

          <input
            type="checkbox"
            id="set-default-card-switch"
            v-model="cardSettings.setIsDefault"
          /><label for="set-default-card-switch"></label>
        </div>
      </div>
      <hr :class="classes['section-divider']" />
      <div :class="classes['modal-footer-section']">
        <div>
          <button :class="classes['cancel-button']" @click="isModalActive = false">
            ยกเลิก
          </button>
        </div>
        <div>
          <button :class="classes['confirm-button']" :disabled="!isFormValid">
            บันทึกข้อมูล
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.modal {
  display: none;
  position: fixed;
  z-index: 10;
  padding-top: 8%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  .modal-content-container {
    border-radius: 12px;
    background-color: #fefefe;
    margin: auto;
    overflow-x: hidden;
    max-width: 35rem;
    width: 80%;
    min-height: 36.5rem;
    .modal-section-content {
      margin: 0 1rem 0 1rem;
      overflow-y: auto;
      .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 1rem 0.8rem 1rem;
        .modal-title {
          font-size: 140%;
          color: var(--primary);
          font-weight: 800;
        }

        .close-modal-button {
          color: #b3b3b3;
        }
      }

      .modal-toggle-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 85%;
        padding: 0rem 0.5rem 0.5rem 0.5rem;
        margin: 1rem;

        .bold-label {
          font-weight: 700;
        }

        input[type="checkbox"] {
          height: 0;
          width: 0;
          visibility: hidden;
        }

        label {
          cursor: pointer;
          text-indent: -9999px;
          width: 2.5rem;
          height: 1.2rem;
          background: #cccccc;
          display: block;
          border-radius: 1rem;
          position: relative;
        }

        label:after {
          content: "";
          position: absolute;
          top: 0.1rem;
          left: 6%;
          width: 1rem;
          height: 1rem;
          background: white;
          border-radius: 1rem;
          transition: 0.3s;
        }

        input:checked + label {
          background: #3161ce;
        }

        input:checked + label:after {
          left: calc(2.5rem - 5%);
          transform: translateX(-100%);
        }

        label:active:after {
          width: 1rem;
        }
      }
    }
    .modal-form-section {
      margin: 1rem;
      padding: 0.5rem 1rem;
      overflow-y: auto;
      height: 15rem;

      .modal-form-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          flex: 1;
          flex-shrink: 1;
        }
      }
      .modal-form-container {
        .form-input {
          display: flex;
          position: relative;
          flex-direction: column;
          padding: 0 0.5rem;
          padding-bottom: 0.5rem;
          > label {
            line-height: 3;
            font-size: 85%;
            > span {
              color: #c83126;
            }
          }
          > input {
            height: 1.5rem;
            border-radius: 5px;
            border: 1.5px solid #b3b3b3;
            text-indent: 0.3rem;
            vertical-align: middle;
            position: relative;

            [type="password"] {
              font-size: 1.2rem;
            }
          }

          > input::placeholder {
            font-size: 80%;
          }

          .eye-icon {
            position: absolute;
            cursor: pointer;
            top: 60%;
            right: 1rem;
          }

          .form-error-description {
            position: relative;
            left: 1rem;
            font-size: 60%;
            line-height: 0;
            transform: translateY(0.6rem);
            font-weight: 600;
            color: #c83126;

            .warning-icon {
              top: 0;
              left: -1rem;
              position: absolute;
              vertical-align: middle;
              transform: translateY(-0.3rem);
            }
          }
        }

        .form-input & .error {
          line-height: 1.5;
        }

        .form-input:not(.error) {
          > label {
            line-height: 3;
          }

          .form-error-description {
            display: none;
          }
        }
      }
    }

    .modal-footer-section {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 0.5rem 1rem;
      padding: 0 0.5rem;

      > div {
        padding: 0.5rem;

        > button {
          height: 2.5rem;
          padding: 0 1rem;
          text-align: center;
          vertical-align: middle;
          border-radius: 8px;
          font-weight: 500;
        }
        .cancel-button {
          border: 1px solid #b3b3b3;
        }

        .confirm-button {
          color: white;
          background-color: var(--secondary);
          border-width: 0;
        }
      }
    }
    .section-divider {
      border: 0;
      border-top: 1.5px solid #e5e5e5;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .sub-section-divider {
      border: 0;
      border-top: 1.5px solid #b3b3b3;
      margin: 0 1.5rem;
    }
  }
}

.show {
  visibility: visible;
  display: block;
}

.error {
  > input,
  input:focus {
    outline-color: #c83126;
    border-color: #c83126 !important;
    background-color: #fcebec;
  }
}
</style>
