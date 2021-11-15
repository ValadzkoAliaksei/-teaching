"use strict";

function checkNember(number) {
  if (number > 10) {
    return number * number;
  }
  if (number === 8 || number === 9) {
    return number - 1;
  }
  return "число меньше или равно 7";
}

const number = +prompt("Введите число");

const message = checkNember(number);

alert(message);
