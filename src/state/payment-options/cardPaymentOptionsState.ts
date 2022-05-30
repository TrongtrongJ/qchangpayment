import { CardFormItem } from "@src/data/cardFormData";
import { ref, computed, reactive, watch } from "vue";

const mockCards: CardFormItem[] = [
  {
    cardType: "VISA",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: true,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "MASTERCARD",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "UNIONPAY",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "JCB",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "VISA",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "MASTERCARD",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "UNIONPAY",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
  {
    cardType: "JCB",
    cardHolderName: "",
    cardCode: "1121121121121121",
    cardBankName: "Krungthai",
    isDefault: false,
    CVV: "112",
    expiration: "08/22",
  },
];

export const cardPaymentOptions = ref<CardFormItem[]>([]);

export const selectedCardIndex = ref<number>(0);

watch(cardPaymentOptions, (newOptions) => {
  const defaultCardIndex = newOptions.findIndex((cpo) => cpo.isDefault);
  selectedCardIndex.value = defaultCardIndex !== -1 ? defaultCardIndex : 0;
});

export const cardPaymentOptionQuantity = computed(
  () => cardPaymentOptions.value.length
);
