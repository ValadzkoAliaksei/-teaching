"use strict";

// const frontendGroup = {
//   student1: "Yana",
//   student2: "Igor",
//   student3: "Anna",
//   student4: "Sergey",
// };

// const arrKeys = Object.keys(frontendGroup);

// console.log(arrKeys);

// const arrValues = Object.values(frontendGroup);

// console.log(arrValues);

// const arrPare = Object.entries(frontendGroup);

// console.log(arrPare);

// const studentName = arrValues.find((item, index) => index === 3);

// console.log(studentName);

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// const arrFruits = Object.entries(prices);

// console.log(arrFruits);

// const newArrFruits = arrFruits.map(([key, value]) => [key, value * 2]);

// console.log(newArrFruits);

// const doublePrices = Object.fromEntries(newArrFruits);

// console.log(doublePrices);

const frontendGroup = {
  student1: {
    firstName: "Yana",
    age: 30,
  },
  student2: "Igor",
  student3: "Anna",
  student4: "Sergey",
};

// const changeName = ({ student1: { name } }) => (name = "Yanna");

// changeName(frontendGroup);

// console.log(frontendGroup);

const {
  student1: { firstName: fName },
  student3,
  student6: stud6 = "Maria",
  ...rest
} = frontendGroup;

console.log(fName);

// console.log(rest);

console.log(stud6);

const frontendGroupArr = ["Yana", "Igor", "Anna", "Sergey", "Maria"];

const [studen1, studen3, studen6, ...restArr] = frontendGroupArr;

// console.log(studen6);
// console.log(restArr);
