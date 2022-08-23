import react from "react";

export default function CalculateChange(props) {
  console.log(props.cash);
  let returnValue = props.cash - props.price;
  let change = [];
  const coinTypes = [
    "hundred",
    "fifty",
    "twenty",
    "ten",
    "five",
    "two",
    "one",
    "fiftyCents",
    "twentyCents",
    "tenCents",
    "fiveCents",
  ];
  const coinValues = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5];
  let amount;

  for (let i = 0; i < coinValues.length; i++) {
    amount = Math.floor(returnValue / coinValues[i]);
    if (amount > 0) {
      change[coinTypes[i]] = amount;
      returnValue = returnValue % coinValues[i];
    }
  }
  console.log(CalculateChange());
  return change;
}
