"use strict";

const formatTime = (num) => (num < 10 ? `0${num}` : `${num}`);

const setTimer = () => {
  // if (counter.innerHTML) counter.remove();
  // counter.innerHTML = current;
  // document.body.append(counter);
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML(
    "beforeend",
    `<h1> ${formatTime(new Date().getHours())}:${formatTime(
      new Date().getMinutes()
    )}:${formatTime(new Date().getSeconds())}</h1>`
  );
};
setTimer();
setInterval(setTimer, 1000);
