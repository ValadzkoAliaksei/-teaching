let newDate;

const showDate = (days) => {
  const dateNow = new Date();
  const dateAfter = +dateNow + days * 24 * 3600 * 1000;
  const date = new Date(dateAfter);
  newDate = `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`;
  return newDate;
};

console.log(showDate(2345678));
