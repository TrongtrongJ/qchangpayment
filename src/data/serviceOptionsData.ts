import { baseUri } from "./appContextData";

const serviceIconsUri = `${baseUri}/service-icons/`;

export type Service = "true-money" | "bigc" | "true-wallet" | "prompt-pay";

export type ServiceType = "counter-service" | "e-wallet";

export type ServiceOption = {
  name: string;
  value: Service;
  iconUri: string;
  type: ServiceType;
};

export const serviceOptions: Readonly<ServiceOption[]> = [
  {
    name: "True Money",
    value: "true-money",
    iconUri: serviceIconsUri + "true-money-icon.png",
    type: "counter-service",
  },
  {
    name: "บิ๊กซีซุปเปอร์เซ็นเตอร์",
    value: "bigc",
    iconUri: serviceIconsUri + "big-c-icon.png",
    type: "counter-service",
  },
  {
    name: "True Wallet",
    value: "true-wallet",
    iconUri: serviceIconsUri + "true-wallet-icon.jpg",
    type: "e-wallet",
  },
  {
    name: "Promptpay Thai Qr Payment",
    value: "prompt-pay",
    iconUri: serviceIconsUri + "thai-qr-icon.png",
    type: "e-wallet",
  },
];
