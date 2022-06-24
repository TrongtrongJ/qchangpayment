import { BaseRecordType } from "./record.util";
import { removeWhiteSpaces, isNumeric } from "./string.util";

export function minifycardTypeName(cardTypeName: string): string {
  return removeWhiteSpaces(cardTypeName.toLowerCase());
}

export function formatCreditDebitCardCode(cardCode: string): string {
  return cardCode
    .replace(/\D/g, "")
    .replace(/\W/gi, "")
    .replace(/(.{4})/g, "$1 ");
}

export function isValidFnameLname(name: string): boolean {
  return name.trim().split(" ").length > 1;
}

const cardExpirationRegex: RegExp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

export function isValidCardExpirationDate(expDate: string): boolean {
  return cardExpirationRegex.test(expDate);
}

export function isValidCVV(cvv: string | number): boolean {
  typeof cvv !== "string" && (cvv = String(cvv));
  return isNumeric(cvv) && cvv.length === 3;
}

const cardRegexMap: BaseRecordType = {
  // electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
  // maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
  // dankort: /^(5019)\d+$/,
  // interpayment: /^(636)\d+$/,
  unionpay: /^(62|88)\d+$/,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$/,
  // amex: /^3[47][0-9]{13}$/,
  // diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  // discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
};

function detectCardType(numericString: string) {
  for (const key of Object.keys(cardRegexMap)) {
    if (cardRegexMap[key].test(numericString)) {
      return key;
    }
  }
}

export function isValidCardCode(cardCode: string): boolean {
  cardCode = removeWhiteSpaces(cardCode);
  return !!detectCardType(cardCode);
}
