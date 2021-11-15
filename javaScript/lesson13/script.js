"use strict";

const obj = {
  fullName: "Валадзько Аляксей Юр'евiч",
  age: 34,
  medition: false,
};

const objJSON = JSON.stringify(obj);
console.log(objJSON);
const odjObj = JSON.parse(objJSON);
console.log(odjObj);
