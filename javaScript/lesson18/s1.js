"use strict";

class Clock {
  render() {
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

  setTime(num) {
    if (num > 9) {
      return num;
    }
    return `0${num}`;
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock();

const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");

startButton.addEventListener("click", () => clock.start());
endButton.addEventListener("click", () => clock.stop());
