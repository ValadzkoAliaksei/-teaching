"use strict";

const arr = ["Анна", "Яна", "Ярослав", "Игорь", "Игорь", "Сергей", "Мария"];

// console.log(arr[0]);

// console.log(arr.length);

// arr.push("Алексей");

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift("Алексей");

// console.log(arr);

// arr.shift();

// console.log(arr);

// delete arr[1];

console.log(arr);

// console.log(arr.length);

// arr.splice(1, 1);

// console.log(arr);

// console.log(arr.length);

// arr.splice(0, 0, "Яна");

// console.log(arr);

// arr.splice(1, 1, "Яна");

// console.log(arr);

const newArr = arr.splice(1, 3);

const newArr2 = arr.slice(1, 3);

const newArr3 = arr.concat(newArr, newArr2);
console.log(newArr3);

// newArr3.forEach((item, index, array) => {
//   console.log(`${item} имеет позицию ${index} в ${array}`);
// });

// const placeOfArr = newArr3.lastIndexOf("Игорь");

// console.log(placeOfArr);

// const isInclud = newArr3.includes("Яна");

// console.log(isInclud);

const arr2 = [
  {
    name: "Сергей",
    age: 30,
  },
  {
    name: "Игорь",
    age: 31,
  },
  {
    name: "Яна",
    age: 30,
  },
];

// const arrOfNames = arr2.map((item, index, array) => item.name);
// console.log(arrOfNames, "arrOfNames");

// const arrOfAges = arr2.map((item, index, array) => item.age);
// console.log(arrOfAges, "arrOfAges");

// const arrOfAges2 = arr2.map((item) => {
//   return { name: item.name, age: item.age + 10 };
// });
// console.log(arrOfAges2, "arrOfAges2");

// const Obj30 = arr2.findIndex((item) => item.age === 31);

// console.log(Obj30, "Obj30");

const arrNumbers = [1, 2, 3, 4, 59, 8, 7, 6];
// const arrSort = arrNumbers.sort(function (a, b) {
//   return b - a;
// });

// console.log(arrSort);

const arrReverse = newArr3.reverse();

// console.log(arrReverse);

// const strNames = newArr3.join("; ");

// console.log(strNames);

// const newArr4 = strNames.split("; ");
// console.log(newArr4);

const arrSum = arrNumbers.reduce((sum = 1, item) => sum * item);
console.log(arrSum, "arrSum");
