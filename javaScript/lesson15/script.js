"use strict";

const firstList = document.querySelector("#first-list");
const secondList = document.querySelector("#second-list");
const thirdList = document.querySelector("#third-list");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
button1.addEventListener("click", () => {
  // firstList.innerHTML = "<a href='https://www.google.com/'> Google </a>";
  // firstList.outerHTML = "<a href='https://www.google.com/'> Google </a>";
  // secondList.textContent = "<a href='https://www.google.com/'> Google </a>";
  // thirdList.hidden = true;
});

button2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "alert";
  div.innerHTML =
    "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
  document.body.append(div);

  // document.body.insertAdjacentHTML(
  //   "afterbegin",
  //   `<div class="alert">
  //   <strong>Всем привет!</strong> Вы прочитали важное сообщение.
  // </div>`
  // );

  setTimeout(() => {
    const div2 = div.cloneNode(true);
    div2.querySelector("strong").innerHTML = "Всем пока!";
    div.after(div2);
    div.remove();
    setTimeout(() => {
      div2.remove();
    }, 1000);
  }, 1000);
});
