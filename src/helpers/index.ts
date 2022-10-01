export function addAmountToUPI(upi: string, amount: number) {
  return `${upi}&am=${amount.toString()}`;
}
