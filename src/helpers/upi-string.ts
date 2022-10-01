import { Platform } from "react-native";

export function seperateUpiProps(upiString: string) {
  const [first, second] = upiString.split("pay?");

  const props = second.split("&");
  const res: any = {};
  const final: any = {};

  for (let prop of props) {
    const [key, value] = prop.split("=", 2);

    res[key] = value?.replace("%20", " ");
  }

  final["amount"] = res.am;
  final["receiver"] = {
    name: res.pn,
    vpa: res.pa,
  };
  final["timestamp"] = new Date().toString();

  return final;
}

export function parseUpiString(upi: string, amount: number) {
  const upiWithAmountFixed = `${upi.replace(
    "&am=",
    ""
  )}&am=${amount.toString()}`;

  if (Platform.OS === "ios") {
    return upiWithAmountFixed.replace("upi://", "tez://upi/");
  }

  return upiWithAmountFixed;
}
