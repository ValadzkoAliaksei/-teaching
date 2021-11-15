"use strict";

const experience = {
  Alieksei: 1,
  Yana: 2,
  Igor: 3,
  Anna: 4,
  Sergey: 5,
  Maria: 25,
};

const experienceArr = Object.values(experience);

let sumExperience = 0;
let workerJun = 0;
let workerSenior = 0;

experienceArr.forEach((item) => {
  sumExperience = sumExperience + item;
  if (item <= 3) {
    workerJun++;
  }
  if (item >= 20) {
    workerSenior++;
  }
});

const midleExperience = sumExperience / experienceArr.length;

alert(Math.round(midleExperience));

alert(workerJun);

alert(workerSenior);
