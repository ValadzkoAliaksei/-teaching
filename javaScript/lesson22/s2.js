"use strict";

const button = document.querySelector("#getTableDataButton");
const loadingImage = document.querySelector(".loading-image");
const form = document.createElement("form");

const setIsLoading = () => {
  loadingImage.classList.toggle("is-loading");
};

const setTR = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<td><textarea>${item}</textarea></td>`);
  });
  return tr;
};

const insertTable = (posts) => {
  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Нажми на меня для отправки");
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`);
  });
  table.append(tr);
  posts.forEach((post) => {
    table.append(setTR(post));
  });
  form.append(table);
  form.append(submitButton);
  document.body.append(form);
};

const getTableData = () => {
  try {
    button.setAttribute("disabled", true);
    setIsLoading();
    Promise.all([
      new Promise((resolve) => setTimeout(() => resolve(null), 1000)), // 1
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ])
      .then((response) => response[1].json())
      .then((result) => {
        setIsLoading();

        insertTable(result);
      });
  } catch (error) {
    setIsLoading();
    console.log(error);
  }
};

const onSubmitForm = async (e) => {
  e.preventDefault();
  setIsLoading();
  const formData = new FormData(form);
  const data = Array.from(formData.entries()).reduce(
    (prev, [name, value]) => ({
      ...prev,
      [name]: value,
    }),
    {}
  );
  const formDataJson = JSON.stringify(data);

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formDataJson,
    });
    const result = await response.json();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1> Запрос выполнился успешно ${result.data}`
    );
  } catch (error) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1> Ошибка выполнения запроса ${error.name}`
    );
  } finally {
    setIsLoading();
  }
};

button.addEventListener("click", getTableData);
form.addEventListener("submit", onSubmitForm);
