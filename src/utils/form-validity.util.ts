import { getStringThatExcludes } from "./string.util";

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
