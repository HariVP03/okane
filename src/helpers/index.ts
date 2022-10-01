export function addAmountToUPI(upi: string, amount: number) {
  return `${upi.replace("&am=", "")}&am=${amount.toString()}`;
}
