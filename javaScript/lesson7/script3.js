"use strict";
const button = document.querySelector("button");
const body = document.querySelector("body");

const calcSum = (number1, number2) => {
  let sum = 0;
  for (let i = number1; i <= number2; i++) {
    sum = sum + i;
  }
  return sum;
};

button.addEventListener("click", () => {
  const paragraf = document.querySelector("p");
  if (paragraf) paragraf.remove();

  const number1 = +document.getElementById("number1").value;
  const number2 = +document.querySelector("#number2").value;
  const sum = calcSum(number1, number2);
  body.insertAdjacentHTML("beforeend", `<p>Сумма чисел равна ${sum}</p>`);
});

// function calcSumDec(number1, number2) {
//   let sum = 0;
//   for (let i = number1; i <= number2; i++) {
//     sum = sum + i;
//   }

//   return alert(`Сумма чисел равна ${sum}   dec`);
// }

// calcSumDec(number1, number2);

// const calcSumEx = function (number1, number2) {
//   let sum = 0;
//   for (let i = number1; i <= number2; i++) {
//     sum = sum + i;
//   }

//   return alert(`Сумма чисел равна ${sum}   ex`);
// };

// calcSumEx(number1, number2);

// calcSum(number1, number2);
