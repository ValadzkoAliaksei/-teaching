"use strict";

const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
let isStart = false;
let timerId;

const setTimer = (current) => {
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML("beforeend", `<h1>${current}</h1>`);
};

const toggleDisabledInputs = (toggle) => {
  const startInput = document.querySelector("#start");
  const endInput = document.querySelector("#end");
  if (toggle) {
    startInput.setAttribute("disabled", toggle);
    endInput.setAttribute("disabled", toggle);
  } else {
    endInput.removeAttribute("disabled");
    startInput.removeAttribute("disabled");
  }
};

const promptNumber = (from, to) => {
  let current = from - 1;
  timerId = setInterval(() => {
    setTimer(current);
    if (current <= to) {
      clearTimeout(timerId);
      toggleDisabledInputs(false);
      toggleButtonName("Пуск");
      isStart = false;
      setTimeout(() => {
        setTimer("ВСЁ!!!");
      }, 1000);
    }
    current--;
  }, 1000);
};

const toggleButtonName = (name) => {
  button.innerHTML = name;
};

const validationNumbers = (firstNumber, lastNumber) => {
  if (!firstNumber || !lastNumber) {
    return "Пожалуйста, введите данные";
  }
  if (isNaN(firstNumber) || isNaN(lastNumber)) {
    return "Пожалуйста, введите числа, а не то что вы понаписали тут";
  }
  if (+firstNumber < +lastNumber) {
    return "Пожалуйста, введите первое число больше второго";
  }
};

const startTimer = (firstNumber, lastNumber) => {
  const error = validationNumbers(firstNumber, lastNumber);
  if (!error) {
    setTimer(+firstNumber);
    promptNumber(+firstNumber, +lastNumber);
    toggleButtonName("Пауза");
    toggleDisabledInputs(true);
    isStart = true;
  } else {
    document.body.insertAdjacentHTML("beforeend", `<h2>${error}</h2>`);
  }
};

const setNumbers = (e) => {
  document.body.insertAdjacentHTML("beforeend", `<span>${e.key} </span>`);
};

button.addEventListener("click", () => {
  const { value: firstNumber } = document.querySelector("#start");
  const { value: lastNumber } = document.querySelector("#end");
  const timerText = document.querySelector("h1")?.innerHTML;
  const errorBlock = document.querySelector("h2");

  if (errorBlock) errorBlock.remove();
  if (isStart) {
    clearTimeout(timerId);
    toggleButtonName("Пуск");
    isStart = false;
  } else {
    startTimer(+timerText || firstNumber, lastNumber);
  }
});

button.addEventListener("pointerenter", () => {
  button.innerHTML === "Пуск"
    ? button.insertAdjacentHTML(
        "afterend",
        "<p class='cloud'> Запустить счётчик</p>"
      )
    : button.insertAdjacentHTML(
        "afterend",
        "<p class='cloud'> Остановить счётчик</p>"
      );
});

button.addEventListener("pointerleave", () => {
  const cloudBlock = document.querySelector(".cloud");
  if (cloudBlock) cloudBlock.remove();
});

for (const input of inputs) {
  input.addEventListener("pointerenter", () => {
    input.style.backgroundColor = "red";
  });

  input.addEventListener("focus", () => {
    input.style.backgroundColor = "red";
  });

  input.addEventListener("pointerleave", () => {
    input.style.backgroundColor = "white";
  });

  input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
  });

  input.addEventListener("keydown", setNumbers);
}
