import React from "react";

//https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400

const testCurrying = () => {
  console.log("testCurrying(): f(n, m) --> f'(n)(m)");
  const multiply = (n, m) => n * m;
  console.log("multiply(3, 4) === 12", multiply(3, 4) === 12); // true

  const curryedMultiply = n => m => multiply(n, m);
  const triple = curryedMultiply(3);
  console.log("triple(4) === 12", triple(4) === 12); // true
};

const testUncurrying = () => {
  const curryedMultiply = n => m => n * m;
  console.log("curryedMultiply(3)(4) === 12", curryedMultiply(3)(4) === 12); // true

  const multiply = (n, m) => curryedMultiply(n)(m);
  console.log("multiply(3, 4) === 12 // true", multiply(3, 4) === 12); // true
};

const CurryingComponent = () => {
  testCurrying();
  testUncurrying();
  return <div>{"CurryingComponent"}</div>;
};
export default CurryingComponent;
