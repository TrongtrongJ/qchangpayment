import { baseSrcUri } from "./appContextData";

const baseIconComponentUri = `${baseSrcUri}/components/icons/`;

type PaymentOption = {
  title: string;
  description: string;
  value: number;
  iconUri: string;
  to: string;
};

export const paymentOptions: Readonly<PaymentOption[]> = [
  {
    title: "เครดิตการ์ด/เดบิตการ์ด",
    description: "ชำระผ่านเครดิตการ์ด/เดบิตการ์ด",
    value: 1,
    iconUri: baseIconComponentUri + "credit-card-icon-svg.vue",
    to: "/payment/cards",
  },
  {
    title: "ตู้ ATM/เคาน์เตอร์ธนาคาร",
    description: "ชำระผ่านตู้เอทีเอ็มและเคาน์เตอร์ของธนาคาร",
    value: 2,
    iconUri: baseIconComponentUri + "atm-icon-svg.vue",
    to: "/payment/bank",
  },
  {
    title: "โมบายแบงค์กิ้ง",
    description: "ชำระผ่านแอพพลิเคชั่นของธนาคาร",
    value: 3,
    iconUri: baseIconComponentUri + "mobile-phone-icon-svg.vue",
    to: "/payment/mobile",
  },
  {
    title: "เคาน์เตอร์เซอร์วิส/ E-Wallet",
    description: "ชำระด้วยบาร์โค้ดผ่านเคาน์เตอร์บริการ/ PromptPay/ E-Wallet",
    value: 4,
    iconUri: baseIconComponentUri + "wallet-icon-svg.vue",
    to: "/payment/services",
  },
];
