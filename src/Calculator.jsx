import { useState } from "react";

export default function Calculator() {
  let [cash, setCash] = useState(3000);
  let [price, setPrice] = useState(4000);
  let [loaded, setLoaded] = useState(false);
  let [change, setChange] = useState({});

  function showChange(newChange) {
    console.log(newChange);
    setLoaded(true);
    setChange(newChange);
  }

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

  function toCalculateChangeObject() {
    let moneyChange = CalculateChange();

    return {
      hundred: moneyChange.hundred,
      fifty: moneyChange.fifty,
      twenty: moneyChange.twenty,
      ten: moneyChange.ten,
      five: moneyChange.five,
      two: moneyChange.two,
      one: moneyChange.one,
      fiftyCents: moneyChange.fiftyCents,
      twentyCents: moneyChange.twentyCents,
      tenCents: moneyChange.tenCents,
      fiveCents: moneyChange.fiveCents,
    };
  }

  console.log(toCalculateChangeObject());
  function handleCashNumber(event) {
    setCash(event.target.value * 100);
  }

  function handlePriceNumber(event) {
    setPrice(event.target.value * 100);
  }

  function submitInput(event) {
    event.preventDefault();
    toCalculateChangeObject().then(showChange);
  }
  let form = (
    <div>
      <form onSubmit={submitInput}>
        <label for="price">Price (Aud$) </label>
        <input type="number" min="0" id="price" onChange={handlePriceNumber} />
        <br />
        <label for="cash">Cash (Aud$) </label>
        <input type="number" min="0" id="cash" onChange={handleCashNumber} />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <h2>Money Change</h2>
        <ul>
          <li>hundred: {change.hundred}</li>
          <li>fifty: {change.fifty}</li>
          <li>twenty: {change.twenty}</li>
          <li>ten: {change.ten}</li>
          <li>five: {change.five}</li>
          <li>two: {change.two}</li>
          <li>one: {change.one}</li>
          <li>fiftyCents: {change.fiftyCents}</li>
          <li>twentyCents: {change.twentyCents}</li>
          <li>tenCents: {change.tenCents}</li>
          <li>fiveCents: {change.fiveCents}</li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
