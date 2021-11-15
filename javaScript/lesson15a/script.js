// "use strict";
// const arr = ["123", "456", "789", "000"];

// const ul = document.createElement("ul");

// arr.forEach((item) => ul.insertAdjacentHTML("beforeend", `<li>${item}</li>`));

// document.body.append(ul);

"use strict";

const arr = [];
let itemArr;

do {
  itemArr = prompt("Введите пункт меню");
  if (itemArr) arr.push(itemArr);
} while (itemArr);

const ul = document.createElement("ul");

arr.forEach((item) => ul.insertAdjacentHTML("beforeend", `<li>${item}</li>`));

document.body.append(ul);
