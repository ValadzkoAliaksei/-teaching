"use strict";

const allLists = document.querySelectorAll("ul>li");

const arrColors = ["blue", "green", "red", "yellow"];

allLists.forEach(
  (list, index) => (list.style.backgroundColor = arrColors[index])
);
