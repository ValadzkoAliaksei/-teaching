"use strict";

// function sayHay() {
//   alert("Hello");
// }

// window.sayHay();

// var text = "Hello";

// window.console.log(window.text);

// const text2 = "Bye";

// window.console.log(window.text2);

// document.body.style.backgroundColor = "red";
// console.log(navigator);
// console.log(location);

// for (let node of document.body.childNodes) {
//   console.log(node); // покажет все узлы из коллекции
// }

// for (let node of document.body.children) {
//   console.log(node); // покажет все теги из коллекции
// }

// console.log(document.body.firstElementChild);

// const firstList = document.getElementById("first-list");

// firstList.style.color = "red";

// console.log(firstList);

// const lists = document.getElementsByTagName("ol");
// console.log(lists);

// for (let list of lists) {
//   console.log(list);
//   list.style.color = "blue";
// }

const firstList = document.querySelector("#first-list");
console.log(firstList);

const lists = document.querySelectorAll("li");
console.log(lists);

for (let list of lists) {
  list.style.color = "blue";
  if (list.matches("#first-list")) list.style.color = "green";
  console.log(list);
}
