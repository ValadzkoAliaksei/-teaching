"use strict";

const button = document.querySelector("button");
const body = document.querySelector("body");

function calcMin(min1, min2, min3) {
  let minNumber = min1;
  if (minNumber > min2) {
    minNumber = min2;
  }
  if (minNumber > min3) {
    minNumber = min3;
  }

  return minNumber;
}

button.addEventListener("click", () => {
  const number1 = document.getElementById("number1").value;
  const number2 = document.querySelector("#number2").value;
  const number3 = document.querySelector(".number3").value;
  const min = calcMin(number1, number2, number3);
  body.insertAdjacentHTML("beforeend", `<p>Минимальное число равно ${min}</p>`);
});
