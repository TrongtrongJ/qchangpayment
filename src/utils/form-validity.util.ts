import { getStringThatExcludes } from "./string.util";

const thaiPhoneNoRegex = /^(0[689]{1})+([0-9]{8})+$/;

const phoneNoShouldExcludes = [" ", "-"];

export function isValidPhoneNumber(phoneNo: string): boolean {
  return thaiPhoneNoRegex.test(
    getStringThatExcludes(phoneNo, phoneNoShouldExcludes)
  );
}
