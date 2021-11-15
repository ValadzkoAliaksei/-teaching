"use strict";
const number = +prompt("Введите число!");

console.log(number);
if (number > 0) {
  alert("Число больше нуля");
} else if (number < 0) {
  alert("Число меньше нуля");
} else if (number === 0) {
  alert("Число равно нулю");
} else {
  alert("Вы ввели не число");
}
