"use strict";

const setTime = (num) => (num > 9 ? num : `0${num}`);

const setTimer = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML(
    "beforeend",
    `<h1>${setTime(hours)}:${setTime(minutes)}:${setTime(seconds)}</h1>`
  );
};

setTimer();

setInterval(setTimer, 1000);
