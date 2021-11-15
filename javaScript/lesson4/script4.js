"use strict";
const number1 = +prompt("Введите первое число!");
const number2 = +prompt("Введите второе число!");
const number3 = +prompt("Введите третье число!");

if (number1 === number2 && number1 === number3) {
  alert("Все числа равны");
} else {
  if (number1 === number2) {
    if (number1 > number3) {
      alert("Самые большие числа первое и второе");
    } else {
      alert("Самые большое число третье");
    }
  } else if (number2 === number3) {
    if (number1 < number3) {
      alert("Самые большие числа второе и третье");
    } else {
      alert("Самые большое число первое");
    }
  } else if (number1 > number2) {
    if (number1 > number3) {
      alert(`Самое большое первое число ${number1}`);
    } else {
      alert(`Самое большое третье число ${number3}`);
    }
  } else {
    if (number2 < number3) {
      alert(`Самое большое третье число ${number3}`);
    } else {
      alert(`Самое большое второе число ${number2}`);
    }
  }
}
