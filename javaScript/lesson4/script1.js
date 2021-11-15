"use strict";
const response = "ECMAScript";
const result = prompt("Каково «официальное» название JavaScript?", response);
if (result === response) {
  alert("Верно!");
} else {
  alert(`Не знаете? «${response}»!`);
}
