"use strict";
const deg = +prompt("Введите знчение угла в градусах", 180);

function calcRadDec(deg) {
  const rad = (deg * 3.14) / 180;
  return alert(`Значение градуса ${deg} в радианах равно ${rad}   dec`);
}

calcRadDec(deg);

const calcRadEx = function (deg) {
  const rad = (deg * 3.14) / 180;
  return alert(`Значение градуса ${deg} в радианах равно ${rad}   ex`);
};

calcRadEx(deg);

const calcRad = (deg) =>
  alert(`Значение градуса ${deg} в радианах равно ${(deg * 3.14) / 180}  =>`);

calcRad(deg);
