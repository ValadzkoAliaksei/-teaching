"use strict";

const form = document.querySelector("form");
const inputText = document.querySelector("input");
const textArea = document.querySelector("textarea");
const button = document.querySelector("button");
const loadingImage = document.querySelector(".loading-image");

button.setAttribute("disabled", "disabled");
document.body.insertAdjacentHTML("beforeend", `<h2 class="load"> Зaгрузка<h2>`);

const onCheckValues = ({ target, elem }) => {
  if (target.value && elem.value && button.hasAttribute("disabled")) {
    button.removeAttribute("disabled");
  }
  if ((!target.value || !elem.value) && !button.hasAttribute("disabled")) {
    button.setAttribute("disabled", true);
  }
};

const clearInputs = () => {
  inputText.value = "";
  textArea.value = "";
};

const clearMessage = () => {
  const MessageText = document.querySelector("h1");
  if (MessageText) MessageText.remove();
};

const setIsLoading = () => {
  const load = document.querySelector("h2");
  load.classList.toggle("is-loading");
  loadingImage.classList.toggle("is-loading");
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
  clearMessage();

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
    clearInputs();
    setIsLoading();
  }
};

form.addEventListener("submit", onSubmitForm);
inputText.addEventListener("blur", (e) =>
  onCheckValues({ target: e.target, elem: textArea })
);
textArea.addEventListener("blur", (e) =>
  onCheckValues({ target: e.target, elem: inputText })
);
