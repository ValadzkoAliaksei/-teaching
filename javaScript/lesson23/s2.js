"use strict";

const button = document.querySelector("#getTableDataButton");
const loadingImage = document.querySelector(".loading-image");
const form = document.createElement("form");
const table = document.createElement("table");
const submitButton = document.createElement("input");

const setIsLoading = () => {
  loadingImage.classList.toggle("is-loading");
};

const setTR = (post, indexTD) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item, indexTR) => {
    tr.insertAdjacentHTML(
      "beforeend",
      `<td><textarea name=${`column${indexTD}-row${indexTR}`}>${item}</textarea></td>`
    );
  });
  return tr;
};

const insertTable = (posts) => {
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Нажми на меня для отправки");
  const tr = document.createElement("tr");
  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`);
  });
  table.append(tr);
  posts.forEach((post, indexTD) => {
    table.append(setTR(post, indexTD));
  });
  form.append(table);
  form.append(submitButton);
  document.body.append(form);
};

const getTableData = () => {
  try {
    button.setAttribute("disabled", true);
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
    console.log(error);
  } finally {
    setIsLoading();
    table.remove();
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
    await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formDataJson,
    });
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1> Запрос выполнился успешно"
    );
  } catch (error) {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1> Ошибка выполнения запроса"
    );
  } finally {
    setIsLoading();
    table.remove();
    submitButton.remove();
  }
};

button.addEventListener("click", getTableData);
form.addEventListener("submit", onSubmitForm);
