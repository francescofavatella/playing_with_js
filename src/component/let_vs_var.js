import React from "react";

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped
const testLet = () => {
  console.log("testLet(): LET is block-scoped");
  for (let i = 0; i < 5; i++) {
    console.log("i: " + i);
  }
  console.log("If you try LET outside its block, you get a ReferenceError");
  console.log("console.log('i: ' + i); //ReferenceError: i is not defined");
  //console.log("i: " + i); //ReferenceError: i is not defined
};

const testVar = () => {
  console.log("testVar(): VAR is function-scoped");
  for (var i = 0; i < 5; i++) {
    console.log("i: " + i);
  }
  console.log("If you try VAR outside its block, you get its value");
  console.log("i: " + i); // It's visible inside the function
};

const LetVsVarComponent = () => {
  testLet();
  testVar();
  return <div>{"LetVsVarComponent"}</div>;
};
export default LetVsVarComponent;
