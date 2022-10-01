import { Platform } from "react-native";

export function parseUpiString(upi: string, amount: number) {
  const upiWithAmountFixed = `${upi.replace("&am=", "")}&am=100`;

  if (Platform.OS === "ios") {
    return upiWithAmountFixed.replace("upi://", "tez://upi/");
  }

  return upiWithAmountFixed;
}
