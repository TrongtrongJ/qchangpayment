import { ref, reactive, computed, watch } from "vue";
import {
  Service,
  ServiceOption,
  serviceOptions,
  ServiceType,
} from "@data/serviceOptionsData";
import { isValidPhoneNumber } from "@src/utils";

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

export const isPaymentPhoneNoTouched = ref<boolean>(false);

export const isPaymentPhoneNoError = computed(
  () =>
    isPaymentPhoneNoTouched.value &&
    !isValidPhoneNumber(servicePaymentPhoneNo.value)
);

export const servicePaymentQrCode = computed(() => "1121121121");
