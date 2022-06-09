import { baseUri } from "./appContextData";

const baseBankIconsUri = `${baseUri}/bank-icons/`;

export type Bank =
  | "kasikorn"
  | "thaipanich"
  | "bangkok"
  | "krungthai"
  | "krungsri";

type BankOption = {
  name: string;
  iconUri: string;
  backgroundColor: `#${string}`;
  value: Bank;
};

export const bankOptions: Readonly<BankOption[]> = [
  {
    name: "กสิกรไทย",
    iconUri: baseBankIconsUri + "kasikorn-bank.png",
    backgroundColor: "#0f7d3e",
    value: "kasikorn",
  },
  {
    name: "ไทยพาณิชย์",
    iconUri: baseBankIconsUri + "thaipanich-bank.png",
    backgroundColor: "#5c2483",
    value: "thaipanich",
  },
  {
    name: "กรุงเทพ",
    iconUri: baseBankIconsUri + "bangkok-bank.png",
    backgroundColor: "#034ea2",
    value: "bangkok",
  },
  {
    name: "กรุงไทย",
    iconUri: baseBankIconsUri + "krungthai-bank.png",
    backgroundColor: "#019bdb",
    value: "krungthai",
  },
  {
    name: "กรุงศรี",
    iconUri: baseBankIconsUri + "krungsri-bank.png",
    backgroundColor: "#6a5b5e",
    value: "krungsri",
  },
];
