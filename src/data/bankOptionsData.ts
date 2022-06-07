import { baseUri } from "./appContextData";

const baseBankIconsUri = `${baseUri}/bank-icons/`;

type BankOption = {
  name: string;
  iconUri: string;
  backgroundColor: `#${string}`;
};

export const bankOptions: BankOption[] = [
  {
    name: "กสิกรไทย",
    iconUri: baseBankIconsUri + "kasikorn-bank.png",
    backgroundColor: "#0f7d3e",
  },
  {
    name: "ไทยพาณิชย์",
    iconUri: baseBankIconsUri + "thaipanich-bank.png",
    backgroundColor: "#5c2483",
  },
  {
    name: "กรุงเทพ",
    iconUri: baseBankIconsUri + "bangkok-bank.png",
    backgroundColor: "#034ea2",
  },
  {
    name: "กรุงไทย",
    iconUri: baseBankIconsUri + "krungthai-bank.png",
    backgroundColor: "#019bdb",
  },
  {
    name: "กรุงศรี",
    iconUri: baseBankIconsUri + "krungsri-bank.png",
    backgroundColor: "#6a5b5e",
  },
];
