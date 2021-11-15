"use strict";

let arr = [];
let listItem;

do {
  listItem = prompt("Ввидете данные списка");
  if (listItem) arr.push(listItem);
} while (listItem);

const ul = document.createElement("ul");

arr.forEach((item) => {
  // const li = document.createElement("li");
  // li.innerHTML = item;
  // ul.append(li);
  ul.insertAdjacentHTML("beforeend", `<li> ${item} </li>`);
});

document.body.append(ul);
