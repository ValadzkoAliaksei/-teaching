"use strict";

// const work = "Cleverland";

// const man = {
//   name: "Aliaksei",
//   age: 34,
//   height: "184 sm",
//   weight: "100 кг",
//   widding: true,
//   [work]: null,
//   wife: {
//     name: "Veronika",
//   },
//   san: {
//     name: "Vseslav",
//     age: 2,
//   },
// };

// alert(man.san.age);

// man.wife.age = 29;

// alert(man.wife.age);
// man.height = 180;

// alert(man.height);

// for (let key in man) {
//   console.log(key);
//   console.log(man[key]);
// }

// alert(man.Cleverland);

const sal = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 1000,
  f: 3000,
  g: 0,
  h: 10000000,
  i: 300,
  k: 200,
};

let sum = 0;
let quant = 0;

let salKey = 0;
let minSal = 0;
let maxSal = 0;

for (let key in sal) {
  if (sal[key] > salKey) {
    minSal++;
  } else {
    maxSal++;
  }
  salKey = sal[key];

  sum = sum + sal[key];
  quant++;
}

alert(sum / quant);

alert(minSal);

alert(maxSal);
