"use strict";

const button = document.querySelector("button");

const setTimer = (current) => {
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML("beforeend", `<h1>${current}</h1>`);
};

const promptNumber = (from, to) => {
  let current = from - 1;
  const timerId = setInterval(() => {
    setTimer(current);
    if (current <= to) clearTimeout(timerId);
    current--;
  }, 1000);
};

button.addEventListener("click", () => {
  const { value: firstNumber } = document.querySelector("#start");
  const { value: lastNumber } = document.querySelector("#end");

  if (
    +firstNumber &&
    +lastNumber &&
    +firstNumber !== isNaN &&
    +lastNumber !== isNaN
  ) {
    setTimer(+firstNumber);
    promptNumber(+firstNumber, +lastNumber);
  }
});
