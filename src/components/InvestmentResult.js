import React from "react";

function InvestmentResult(props) {
    let totalInterest = 0;

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((item) => (
          <tr>
            <td>{item.year}</td>
            <td>{item.savingsEndOfYear.toFixed(2)}</td>
            <td>{item.yearlyInterest.toFixed(2)}</td>
            <td>{(totalInterest+=item.yearlyInterest).toFixed(2)}</td>
            <td>{(item.savingsEndOfYear-totalInterest).toFixed(2)}</td>
          </tr>
        ))}
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
}

export default InvestmentResult;
