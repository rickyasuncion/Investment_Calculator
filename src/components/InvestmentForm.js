import React, { useState } from "react";

function InvestmentForm(props) {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedInterest, setExpectedInterest] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "current-savings") {
      setCurrentSavings(value);
    } else if (identifier === "yearly-contribution") {
      setYearlySavings(value);
    } else if (identifier === "expected-return") {
      setExpectedInterest(value);
    } else if (identifier === "duration") {
      setInvestmentDuration(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investment = {
      currentSavings: +currentSavings,
      yearlySavings: +yearlySavings,
      expectedInterest: +expectedInterest,
      investmentDuration: +investmentDuration,
    };

    props.onCalculate(investment);
    setCurrentSavings(0);
    setYearlySavings(0);
    setExpectedInterest(0);
    setInvestmentDuration(0)
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;
