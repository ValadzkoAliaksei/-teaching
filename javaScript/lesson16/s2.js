const firstNumber = +prompt("Введите первое число");
const lastNumber = +prompt("Введите конечное число");
const setTimer = (current) => {
  const timer = document.querySelector("h1");
  if (timer) timer.remove();
  document.body.insertAdjacentHTML("beforeend", `<h1>${current}</h1>`);
};
const promptNumber = (from, to) => {
  let current = from - 1;
  const timerId = setInterval(() => {
    setTimer(current);
    if (current <= to) clearTimeout(timerId);
    current--;
  }, 1000);
};
setTimer(firstNumber);
promptNumber(firstNumber, lastNumber);
