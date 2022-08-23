import react, { useState } from "react";
import CalculateChange from "./CalculateChange";
export default function Calculator() {
  let [cash, setCash] = useState(3000);
  let [price, setPrice] = useState(4000);

  function CalculateChange() {
    let returnValue = cash - price;
    let change = {};
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
    return change;
  }

  console.log(CalculateChange());
  function handleCashNumber(event) {
    setCash(event.target.value * 100);
  }

  function handlePriceNumber(event) {
    setPrice(event.target.value * 100);
  }

  return (
    <div>
      <form>
        <label for="price">Price (Aud$) </label>
        <input type="number" min="0" id="price" onChange={handlePriceNumber} />
        <br />
        <label for="cash">Cash (Aud$) </label>
        <input type="number" min="0" id="cash" onChange={handleCashNumber} />
      </form>
    </div>
  );
}
