"use strict";

const button = document.querySelector("#getTableDataButton");
const loadingImage = document.querySelector(".loading-image");

const setIsLoading = () => {
  loadingImage.classList.toggle("is-loading");
};

const setTR = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<td><input value='${item}'/></td>`);
  });
  return tr;
};

const insertTable = (posts) => {
  const form = document.createElement("form");
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

const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
};

const getTableData = () => {
  try {
    setIsLoading();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => insertTable(result));
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const result = await response.json();
    // insertTable(result);
    button.setAttribute("disabled", true);
    setIsLoading();
  } catch (error) {
    setIsLoading();
    console.log(error);
  }
};

button.addEventListener("click", getTableData);
