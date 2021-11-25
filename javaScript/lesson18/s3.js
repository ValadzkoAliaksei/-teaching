"use strict";

class Clock {
  constructor() {
    this.timerId;
  }

  setTime(num) {
    if (num > 9) {
      return num;
    }
    return `0${num}`;
  }

  setClock() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const timer = document.querySelector("h1");
    if (timer) timer.remove();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>${this.setTime(hours)}:${this.setTime(minutes)}:${this.setTime(
        seconds
      )}</h1>`
    );
  }

  start() {
    this.setClock();
    this.timerId = setInterval(() => this.setClock(), 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }
}

const clock = new Clock();

const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");

startButton.addEventListener("click", () => clock.start());
endButton.addEventListener("click", () => clock.stop());
