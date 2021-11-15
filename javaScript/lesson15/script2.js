// "use strict";

// const languagesList = document.querySelector("#languages");
// languagesList.hidden = true;

// const functionalLanguagesList = document.querySelectorAll(
//   "#languages>li:first-of-type>ol>li"
// );

// const notFunctionalLanguagesList = document.querySelectorAll(
//   "#languages>li:last-of-type>ol>li"
// );

// console.log(functionalLanguagesList);

// functionalLanguagesList.forEach((item) => item.textContent);

// console.log(notFunctionalLanguagesList, "notFunctionalLanguagesList");

// notFunctionalLanguagesList.forEach(
//   (item) => (document.body.textContent += item.textContent)
// );

"use striсt";
let firstList = document.querySelector("ol > li");
let lastList = document.querySelector("body > ol > li:last-of-type");
let secondList = document.querySelector("body > ol > li:nth-of-type(2)");

function displayNone(elem1, elem2, elem3) {
  elem1.hidden = true;
  elem2.hidden = true;
  elem3.hidden = true;
}

function displayTrue(elem) {
  elem.hidden = false;
  alert(elem.textContent);
}

setTimeout(displayNone, 1000, firstList, secondList, lastList);

setTimeout(displayTrue, 3000, firstList);
setTimeout(displayTrue, 5000, secondList);
setTimeout(displayTrue, 7000, lastList);
