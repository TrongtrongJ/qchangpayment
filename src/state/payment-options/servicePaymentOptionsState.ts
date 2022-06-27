import { ref, reactive, computed, watch } from "vue";
import {
  Service,
  ServiceOption,
  serviceOptions,
  ServiceType,
} from "@data/serviceOptionsData";
import {
  getUnformattedPhoneNumber,
  isNumeric,
  isValidPhoneNumber,
} from "@src/utils";

export const selectedService = ref<Service>("true-money");

export const selectedServiceOption = computed(
  () =>
    serviceOptions.find((po) => po.value === selectedService.value) ||
    serviceOptions[0]
);

type PayByServiceStep = "select-service" | "input-payment-data" | "await-pay";
export const currentPaymentStep = ref<PayByServiceStep>("select-service");

export const selectedServiceType = computed(
  () => selectedServiceOption.value.type
);

export function selectServiceOptionHandler(value: Service) {
  selectedService.value = value;
  currentPaymentStep.value = "input-payment-data";
}

export const servicePaymentPhoneNo = ref<string>("");

const unformattedPaymentPhoneNo = computed(() =>
  getUnformattedPhoneNumber(servicePaymentPhoneNo.value)
);

export const isPaymentPhoneNoTouched = ref<boolean>(false);

export const isPaymentPhoneNoError = computed(
  () =>
    isPaymentPhoneNoTouched.value &&
    !isValidPhoneNumber(unformattedPaymentPhoneNo.value)
);

export const servicePaymentQrCode = computed(() => "1121121121");

export const paymentPhoneNoErrorMsg = computed<string>(() => {
  if (!isPaymentPhoneNoError.value) {
    return "";
  } else {
    const unformattedPhoneNumber = unformattedPaymentPhoneNo.value;
    if (!unformattedPhoneNumber.length)
      return "กรุณากรอกหมายเลขโทรศัพท์ของคุณให้ครบถ้วน";
    if (!isNumeric(unformattedPaymentPhoneNo.value))
      return "โปรดกรอกเบอร์โทรเป็นตัวเลข0-9เท่านั้น";
    if (unformattedPhoneNumber.length !== 10)
      return "กรุณากรอกหมายเลขโทรศัพท์ของคุณให้ครบถ้วน";
    return "เกิดข้อผิดพลาด";
  }
});
