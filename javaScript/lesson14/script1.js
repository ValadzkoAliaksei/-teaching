"use strict";

const firstBlock = document.querySelector("#first");
firstBlock.style.backgroundColor = "red";

const secondBlock = document.querySelector("#second");
secondBlock.style.backgroundColor = "blue";

const yellowBlocks = document.querySelectorAll(".yellow");

yellowBlocks[0].style.backgroundColor = "yellow";
yellowBlocks[yellowBlocks.length - 1].style.backgroundColor = "yellow";

// yellowBlocks.forEach((elem, index) => {
//   if (index === 1) elem.style.backgroundColor = "green";
// });

const blocks = document.querySelectorAll("div");

blocks[3].style.backgroundColor = "green";
