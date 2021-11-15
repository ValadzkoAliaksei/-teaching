"use strict";
const button = document.querySelector("#button");
const body = document.querySelector("body");

// button.addEventListener("click", () => {
//   const paragraf = document.querySelector("p");
//   if (paragraf) paragraf.remove();
//   const value = document.getElementById("number").value;
//   if (!isNaN(+value) && (+value || value === "0")) {
//     const valueSm = +value * 2.54;
//     body.insertAdjacentHTML(
//       "beforeend",
//       `<p>${value}дюймов равно ${+valueSm.toFixed(2)}см</p>`
//     );
//   } else {
//     body.insertAdjacentHTML("beforeend", `<p>Введите число!!!!</p>`);
//   }
// });

const checkStr = (str) => {
  const str2 = str.trim();
  const lastChar = str2.substr(str2.length - 1, 1);
  switch (lastChar) {
    case ".": {
      alert("Предложение повествовательное");
      break;
    }
    case "?": {
      alert("Предложение вопросительное");
      break;
    }
    case "!": {
      alert("Предложение восклицательное");
      break;
    }
    default: {
      alert("Вы не ставите знаки препинания");
    }
  }
};

let string = prompt("Введите строку");

checkStr(string);
