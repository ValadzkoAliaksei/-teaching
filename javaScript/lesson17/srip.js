"use strict";

const button = document.querySelector("button");
let isStart = false;
let testButton = "Пуск";
let timerId;

const setTimer = (current) => {
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML("beforeend", `<h1>${current}</h1>`);
};

const promptNumber = (from, to) => {
  let current = from - 1;
  timerId = setInterval(() => {
    setTimer(current);
    if (current <= to) clearTimeout(timerId);
    current--;
  }, 1000);
};

const startTimer = (firstNumber, lastNumber) => {
  if (firstNumber && lastNumber) {
    if (isNaN(firstNumber) || isNaN(lastNumber)) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<h2> Пожалуйста, введите числа, а не то что вы понаписали тут</h2>`
      );
    } else {
      if (+firstNumber > +lastNumber) {
        setTimer(+firstNumber);
        promptNumber(+firstNumber, +lastNumber);
      } else {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<h2> Пожалуйста, введите первое число больше второго</h2>`
        );
      }
    }
  } else {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h2> Пожалуйста, введите данные</h2>`
    );
  }
};

const stopTimer = () => {
  clearTimeout(timerId);
};

button.addEventListener("click", () => {
  let firstNumber2;

  const { value: firstNumber } = document.querySelector("#start");
  const { value: lastNumber } = document.querySelector("#end");
  const h1 = document.querySelector("h1");
  if (h1) firstNumber2 = +h1.innerHTML;
  const error = document.querySelector("h2");
  if (error) error.remove();
  if (isStart) {
    stopTimer();
  } else {
    startTimer(firstNumber2 || firstNumber, lastNumber);
  }
  isStart = !isStart;
  button.innerHTML = isStart ? "Пауза" : "Пуск";
});
