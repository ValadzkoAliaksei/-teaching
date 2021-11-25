"use strict";
const callButton = document.querySelector("#callButton");

const setTR = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<td>${item}</td>`);
  });
  return tr;
};

const buildTable = (posts) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`);
  });
  table.append(tr);
  posts.forEach((post) => {
    table.append(setTR(post));
  });

  document.body.append(table);
};

const getTableData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.ok) {
    const result = await response.json();
    buildTable(result);
  } else {
    console.log("error");
  }
};

callButton.addEventListener("click", getTableData);
