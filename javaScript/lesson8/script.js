"use strict";
const person = {
  surname: "Валадзько",
  name: "Аляксей",
  middleName: "Юр'евiч",
};
person.dateBirth = "22.04.1987";
person.profession = "frontend developer";
person.position = "junior";
person.experience = 1;
const person2 = {
  surname: person.surname,
  name: person.name,
  middleName: person.middleName,
};
delete person.middleName;
if ("middleName" in person) {
  alert(person.middleName);
} else {
  alert("Такого свойства не существует");
}
let sumKeys = 0;
let sumNumbers = 0;
for (let key in person) {
  sumKeys++;
  if (typeof person[key] === "number") {
    sumNumbers++;
  }
}
alert(sumKeys);
alert(`Сумма свойств, значение которых является число равно ${sumNumbers}`);
