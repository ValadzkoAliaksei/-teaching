"use strict";
const date = new Date();
const hours = date.getHours();
console.log(hours);
const userName = prompt("Как Вас звать?", "Алексей");

if (hours >= 5 && hours <= 12) {
  alert(`Бодрое утро, ${userName}`);
} else if (hours >= 13 && hours <= 18) {
  alert(`Хорошего дня, ${userName}`);
} else if (hours >= 19 || hours === 0) {
  alert(`Добрый вечер, ${userName}`);
} else if (hours >= 1 && hours <= 4) {
  alert(`Спокойной ночи, ${userName}`);
} else {
  alert("Такое быть не может!!");
}
