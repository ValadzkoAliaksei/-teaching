"use strict";

const cost = +prompt("Введите стоимость покупки");
const sum = +prompt("Введите сумму денег на кармане");

const calcBuy = (cost, sum, calcChange) => {
  if (cost < sum) {
    return alert(`Ваша сдача ${calcChange(cost, sum)}`);
  } else {
    return alert("Недостаточная сумма");
  }
};

calcBuy(cost, sum);
