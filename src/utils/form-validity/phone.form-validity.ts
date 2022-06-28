import { getStringThatExcludes, isNumeric } from "../string.util";

const thaiPhoneNoRegex = /^(0[689]{1})+([0-9]{8})+$/;

const phoneNoShouldExcludes = [" ", "-"];

export function getUnformattedPhoneNumber(phoneNo: string): string {
  return getStringThatExcludes(phoneNo, phoneNoShouldExcludes);
}

export function isValidPhoneNumber(
  phoneNo: string,
  isUnformatted: boolean = true
): boolean {
  return thaiPhoneNoRegex.test(
    isUnformatted
      ? phoneNo
      : getStringThatExcludes(phoneNo, phoneNoShouldExcludes)
  );
}

export function getPhoneNumberErrorMsg(unformattedPhoneNumber: string): string {
  const phoneNumberLength = unformattedPhoneNumber.length;
  if (!phoneNumberLength || phoneNumberLength < 10)
    return "กรุณากรอกหมายเลขโทรศัพท์ของคุณให้ครบถ้วน";
  if (!isNumeric(unformattedPhoneNumber))
    return "โปรดกรอกเบอร์โทรเป็นตัวเลข0-9เท่านั้น";
  if (phoneNumberLength > 10) return "หมายเลขโทรศัพท์ต้องไม่เกิน10ตัว";
  return "";
}
