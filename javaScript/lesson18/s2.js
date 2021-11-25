class Timer {
  constructor(startInput, endInput) {
    this.startInput = startInput;
    this.endInput = endInput;
    this.timerId;
  }

  setTimer() {
    const timerBlock = document.querySelector("h1");
    if (timerBlock) timerBlock.remove();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1>${this.startInput}</h1>`
    );
  }

  start() {
    this.setTimer();
    this.timerId = setInterval(() => {
      this.startInput--;
      this.setTimer();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }
}

const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");

startButton.addEventListener("click", () => {
  const endInput = document.querySelector("#endInput").value;
  const timerBlock = document.querySelector("h1");
  const startInput = timerBlock
    ? timerBlock.innerHTML
    : document.querySelector("#startInput").value;

  const timer = new Timer(+startInput, +endInput);
  timer.start();

  endButton.addEventListener("click", () => {
    timer.stop();
  });
});
