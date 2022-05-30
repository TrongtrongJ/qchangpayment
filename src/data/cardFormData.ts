const cardTypes = <const>["VISA", "MASTERCARD", "UNIONPAY", "JCB"];

export type cardType = typeof cardTypes[number];

export type MinimalCardFormItem = {
  cardType: cardType;
  cardHolderName: string;
  cardCode: string;
  cardBankName: string;
};

export type CardFormItem = MinimalCardFormItem & {
  isDefault: boolean;
  CVV: string;
  expiration: string;
};

export type CardSettings = {
  addToCardList: boolean;
  setIsDefault: boolean;
};

export const initialCardFormData: CardFormItem = {
  cardType: "VISA",
  cardHolderName: "",
  cardCode: "",
  cardBankName: "",
  isDefault: false,
  CVV: "",
  expiration: "",
};

export const initialCardSettings: CardSettings = {
  addToCardList: true,
  setIsDefault: false,
};

export const cardTypeSelections = cardTypes.map((cardType) => ({
  label: cardType,
  value: cardType,
}));
