"use striсt";

// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// const body = document.querySelector("body");

// function checkAge(age) {
//   const p = document.querySelector("p");
//   if (p) {
//     p.remove();
//   }
//   if (age > 16) {
//     body.insertAdjacentHTML("beforeend", "<p>Добро пожаловать!</p>");
//   } else {
//     body.insertAdjacentHTML("beforeend", "<p>Вы еще молоды!</p>");
//   }
// }

// button.addEventListener("click", () => checkAge(input.value));

function checkAge(age) {
  if (age < 16) {
    alert("Вы еще молоды");
  } else {
    alert("Добро божаловать");
  }
}

const ageUser = +prompt("Сколько вам лет?", 18);

checkAge(ageUser);
