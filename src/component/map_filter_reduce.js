import React from "react";

const reduce_VS_reduceRight = () => {
  const arr = ["1", "2", "3", "4", "5"];

  const totalReduce = arr.reduce(function(prev, cur) {
    return prev + cur;
  });

  const totalReduceRight = arr.reduceRight(function(prev, cur) {
    return prev + cur;
  });

  console.log(totalReduce); // => 12345
  console.log(totalReduceRight); // => 54321
};

const MapFilterReduceComponent = () => {
  reduce_VS_reduceRight();
  return <div>{"MapFilterReduceComponent"}</div>;
};
export default MapFilterReduceComponent;
