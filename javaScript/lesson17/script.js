"use strict";

const button = document.querySelector("input");
const block = document.querySelector("div");

// button.onclick = () => {
//   console.log("Спасибо");
// };

const sayHello = (e) => {
  console.log("Hello");
  // button.removeEventListener("click", sayHello);
  // console.log(e.target.value);
  console.log(e.target.value || e.target.innerHTML);
  console.log(e.currentTarget.value || e.currentTarget.innerHTML);
  e.stopPropagation();
};

const sayBye = (e) => {
  console.log("Bye");
  // button.removeEventListener("click", sayHello);
  // console.log(e.target.value);
  console.log(e.target.value || e.target.innerHTML);
  console.log(e.currentTarget.value || e.currentTarget.innerHTML);
  e.stopPropagation();
};

button.addEventListener("click", sayHello);

block.addEventListener("click", sayBye);
