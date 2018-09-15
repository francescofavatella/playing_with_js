import React from "react";

//https://medium.freecodecamp.org/heres-how-you-can-make-better-use-of-javascript-arrays-3efd6395af3c
const arrayTest = () => {
  console.log("--- arrayTest");
  const cars = [
    "ferrari",
    "lamborghini",
    "porsche",
    "mercedes",
    "bmw",
    "audi",
    "ferrari"
  ];

  //Replacing Array.indexOf with Array.includes
  console.log("indexOf(lamborghini)", cars.indexOf("lamborghini"));
  // 2
  console.log("indexOf(fiat)", cars.indexOf("fiat"));
  // -1

  console.log("includes(lamborghini)", cars.includes("lamborghini"));
  // true
  console.log("includes(fiat)", cars.includes("fiat"));
  // false
};
const arrayObjTest = () => {
  console.log("--- arrayObjTest");
  //Using Array.find instead of Array.filter
  const cars = [
    { id: 1, name: "ferrari", nation: "italy" },
    { id: 2, name: "laborghini", nation: "italy" },
    { id: 3, name: "porsche", nation: "germany" },
    { id: 4, name: "porsche", nation: "germany" }
  ];

  function getCar(name) {
    return car => car.name === name;
  }

  console.log(cars.filter(getCar("porsche")));
  // [
  //   { id: 3, name: 'porsche' },
  //   { id: 4, name: 'porsche' },
  // ]

  console.log(cars.find(getCar("porsche")));
  // { id: 3, name: 'porsche' }

  //Replacing Array.find with Array.some
  function isFrom(nation) {
    return car => car.nation === nation;
  }

  console.log(cars.find(isFrom("italy")));
  // {id: 1, name: "ferrari", nation: "italy"}

  console.log(cars.some(isFrom("italy")));
  // true
};
const ArraysComponent = () => {
  arrayTest();
  arrayObjTest();
  return <div>{"ArraysComponent"}</div>;
};
export default ArraysComponent;
