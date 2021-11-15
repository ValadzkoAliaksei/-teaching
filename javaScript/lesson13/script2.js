"use strict";
let sum = 0;
const calcNumbers = () => {
  for (let i = 1; i <= 10000000000; i++) {
    sum = sum + i;
  }
  return sum;
};

const date1 = new Date();
calcNumbers();

const date2 = new Date();

const dateForCalc = date2 - date1;

console.log(dateForCalc);
console.log(sum);
