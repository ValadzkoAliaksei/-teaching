"use strict";

const salaries = {
  writeWorkers() {
    const name = prompt("Ведите Имя работника");
    const salary = +prompt("Ведите зарплату работника");
    this[name] = salary;
  },

  calcMiddleSalary() {
    let sum = 0;
    let quantity = 0;
    for (let key in this) {
      if (key !== "calcMiddleSalary" && key !== "writeWorkers") {
        quantity++;
        sum = sum + this[key];
      }
    }
    alert(sum / quantity);
  },
};

salaries.writeWorkers();
salaries.writeWorkers();

salaries.calcMiddleSalary();
