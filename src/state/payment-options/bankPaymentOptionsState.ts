import { ref, reactive, computed, watch } from "vue";
import { Bank, bankOptions } from "@src/data/bankOptionsData";

type PayByBankStep = "select-bank" | "select-method" | "pay";

export const selectedBank = ref<Bank>("kasikorn");

export const selectedBankOption = computed(
  () =>
    bankOptions.find((bo) => bo.value === selectedBank.value) || bankOptions[0]
);

export const currentPaymentStep = ref<PayByBankStep>("select-bank");

type BankPaymentMethod = "atm" | "counter";
export const selectedBankPaymentMethod = ref<BankPaymentMethod>("atm");

export function selectBankOptionHandler(value: Bank) {
  selectedBank.value = value;
  currentPaymentStep.value = "select-method";
}

export function proceedWithPaymentHandler() {
  currentPaymentStep.value = "pay";
}

export const paymentInfo = reactive({
  paymentRefId: "9362533441",
  paymentBarcode: "1121121121",
  paymentQRCode: "https://www.google.co.th",
});
