import React from "react";

const stringUtilities = () => {
  console.log(
    String.fromCharCode(97), // 97 -> a

    parseInt("10"), // "10"->10
    parseInt("hi"), // "hi"->NaN

    "012345".split(""), // ["0", "1", "2", "3", "4", "5"]

    ["a", "b", "c"].join("") // "abc"
  );
};

const StringUtiliesComponent = () => {
  stringUtilities();
  return <div>{"StringUtiliesComponent"}</div>;
};
export default StringUtiliesComponent;
