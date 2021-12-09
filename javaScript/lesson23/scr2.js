"use strict";

const button = document.querySelector("#getTableDataButton");
const loadingImage = document.querySelector(".loading-image");
const form = document.createElement("form");
const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Нажми на меня для отправки");
submitButton.setAttribute("disabled", "disabled");
const table = document.createElement("table");
const tr = document.createElement("tr");
document.body.insertAdjacentHTML(
  "beforeend",
  '<h2 class="load"> Загрузка...</h2>'
);

const setIsLoading = () => {
  loadingImage.classList.toggle("is-loading");
};

const setIsLoadingSend = () => {
  const loading = document.querySelector("h2");
  loading.classList.toggle("is-loading");
};

const setTR = (post, indexTD) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item, indexTR) => {
    tr.insertAdjacentHTML(
      "beforeend",
      `<td><textarea name=${`row${indexTD}-coll${indexTR}`}>${item}</textarea></td>`
    );
  });
  return tr;
};

const insertTable = (posts) => {
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

const createSendButton = () => {
  const isDisable = submitButton.hasAttribute("disabled");
  if (isDisable) submitButton.removeAttribute("disabled");
};

const getTableData = () => {
  const messageText = document.querySelector("h1");
  if (messageText) messageText.remove();
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
  setIsLoadingSend();
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
    await response.json();
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1> Форма отправлена успешно</h1>"
    );
  } catch {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1> Ошибка отправки формы </h1>"
    );
  } finally {
    setIsLoadingSend();
    submitButton.remove();
    button.removeAttribute("disabled");
    form.remove();
    table.remove();
  }
};

button.addEventListener("click", getTableData);

form.addEventListener("change", createSendButton);

form.addEventListener("submit", onSubmitForm);
