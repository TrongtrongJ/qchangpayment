import { ref, reactive, computed, watch } from "vue";
import { Service, serviceOptions, ServiceType } from "@data/serviceOptionsData";

export const selectedService = ref<Service>("true-money");

export const selectedServiceOption = computed(
  () =>
    serviceOptions.find((po) => po.value === selectedService.value) ||
    serviceOptions[0]
);

type PayByServiceStep = "select-service" | "input-payment-data" | "await-pay";
export const currentPaymentStep = ref<PayByServiceStep>("input-payment-data");

export const selectedServiceType = computed(
  () => selectedServiceOption.value.type
);

export function selectServiceOptionHandler(value: Service) {
  selectedService.value = value;
  currentPaymentStep.value = "input-payment-data";
}

export const servicePaymentQrCode = computed(() => "1121121121");
