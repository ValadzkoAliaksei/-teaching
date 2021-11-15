"use strict";
const getWeekDay = (date) => {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
};

const dateBirthday = new Date(1987, 3, 22); // 22 апреля 1987
console.log(getWeekDay(dateBirthday)); // СР

const dateBirthdayNow = new Date(2022, 3, 22);
console.log(getWeekDay(dateBirthdayNow));

const ageNow = new Date(2021, 9, 25) - new Date(1987, 3, 22);
console.log(Math.trunc(ageNow / 31536000000));

const daysForBirthday = new Date(2022, 3, 22) - new Date(2021, 9, 25);
console.log(Math.trunc(daysForBirthday / (24 * 3600 * 1000)));
