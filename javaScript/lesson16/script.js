"use strict";

const firstNumber = +prompt("Введите начальное число");
const lastNumber = +prompt("Введите конечное число");
// const counter = document.createElement("h1");

const printNumbers = (from, to) => {
  let current = from;
  const timerId = setInterval(() => {
    // if (counter.innerHTML) counter.remove();
    // counter.innerHTML = current;
    // document.body.append(counter);
    const counter = document.querySelector("h1");
    if (counter) counter.remove();
    document.body.insertAdjacentHTML("beforeend", `<h1> ${current} </h1>`);
    if (current == to) {
      clearInterval(timerId);
    }
    current--;
  }, 1000);
};

printNumbers(firstNumber, lastNumber);
