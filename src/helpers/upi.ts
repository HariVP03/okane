import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";
import { seperateUpiProps } from "./upi-string";

const example = {
  props: {
    "am=": undefined,
    "cu=INR": undefined,
    "mc=9405": undefined,
    "mode=02": undefined,
    "orgid=159002": undefined,
    "pa=pmcares@sbi": undefined,
    "pn=PM%20CARES": undefined,
    "purpose=00": undefined,
    "sign=MEUCIArAf9pTa2tO9TUF2Y5//RZMSmy4IfdyNuBLcg3yq9LzAiEA5yImT7ObOtkwRiS+lzH2689QINxZi/kii4haMM8EZgk=":
      undefined,
    "tn=": undefined,
    "tr=": undefined,
    "url=": undefined,
  },
};

export function intiateUpiPayment(upi: string) {
  Linking.openURL(upi).then(() => {
    const upiProps = seperateUpiProps(upi);

    AsyncStorage.getItem("transactions").then((txns: any) => {
      const newTransactions = txns
        ? [...JSON.parse(txns), upiProps]
        : [upiProps];

      AsyncStorage.setItem("transactions", JSON.stringify(newTransactions));
      console.log({ newTransactions });
    });
  });
}
