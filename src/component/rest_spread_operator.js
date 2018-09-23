import React from "react";

https://www.youtube.com/watch?v=1KQ4QJ_gzrs

const testSpreadArray = () => {
  //--- concat ---------------------
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  console.log("concat", array1.concat(array2));

  console.log(
    "multiple concat",
    [0]
      .concat(array1)
      .concat(array2)
      .concat([7, 8, 9])
  );

  //--- spread ---------------------
  console.log("spread", [0, ...array1, ...array2, 7, 8, 9]);

  //--- Example: log ---------------------

  function log() {
    // const args = Array.prototype.slice.call(arguments);
    const args = Array.from(arguments);
    console.log(args);
  }
  log("hi");

  function log1() {
    // const args = Array.prototype.slice.call(arguments);
    const args = Array.from(arguments);
    console.log.apply(console, args);
  }
  log1(1, 2, 3);

  //------------------------

  function log_spread() {
    // const args = Array.prototype.slice.call(arguments);
    const args = Array.from(arguments);
    console.log(...args);
  }
  log_spread(1, 2, 3);

  //------------------------

  function log_rest_1(...args) {
    console.log(...args);
  }
  log_rest_1(1, 2, 3, 4, 5, 6, 7);

  function log_rest_2(type, ...args) {
    console[type](...args);
  }
  log_rest_2("warn", 1, 2, 3, 4, 5, 6, 7);
};

const testSpreadObject = () => {
  //--- Object.assign ---------------------
  const obj1 = { a: "b", c: { d: "e" } };
  const obj2 = { c: { f: "g" }, h: "i" };
  const obj0 = { x: "y" };

  // shallow merge
  // conflict between obj1 and obj2 on c:...
  // order matters
  console.log(Object.assign({}, obj0, obj1, obj2));
  console.log(Object.assign({}, obj0, obj2, obj1));

  //--- Spread operator with objects ---------------------
  // order matter
  console.log({ a: "z", ...obj0, ...obj1, ...obj2 });
  console.log({ ...obj0, ...obj1, ...obj2, a: "z" });

  //--- Rest operator with objects (destructoring) ---------------------
  const obj3 = { a: "z", ...obj0, ...obj1, ...obj2 };
  const { a, c, ...rest } = obj3;
  console.log(a, c, rest);

  //--- Example: component with style ---------------------
  const Box = ({ style, ...props }) => {
    return (
      <div {...props} id="hi" style={{ backgroundColor: "black", ...style }} />
    );
  };
  const ui = <Box style={{ fontSize: 15 }} />;
};

const RestSpreadOperatorComponent = () => {
  testSpreadArray();
  testSpreadObject();
  return <div>{"RestSpreadOperatorComponent"}</div>;
};
export default RestSpreadOperatorComponent;
