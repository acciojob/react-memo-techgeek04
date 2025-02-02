import React, { useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  return num * 100000000;
};

const UseMemo = ({ count }) => {
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  );
};

export default UseMemo;
