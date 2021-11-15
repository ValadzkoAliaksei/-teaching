"use strict";
const user = {
  display: "1440×900",
  JavaScript: "Да",
  Flash: 32.0,
  OS: "Windows8",
};

const { display: myDisplay, OS: MyOS, browser = "Google Chrome" } = user;

alert(myDisplay);

alert(MyOS);

alert(browser);

const speed = [9.73, 9.68, 9.71, 9.74, 9.72, 9.75];

const sortSpeed = speed.sort((a, b) => b - a);

console.log(sortSpeed);

const [max1, max2, max3, ...rest] = sortSpeed;

console.log(rest);

const qwerty = {
  Philips: 21,
  Asus: 19,
  Samsung: 23.5,
  LG24MK: 23.6,
  LG27GL: 27,
};

const newObj = Object.fromEntries(
  Object.entries(qwerty).map(([key, value]) => [
    key,
    +(value * 2.54).toFixed(1),
  ])
);

console.log(newObj);
