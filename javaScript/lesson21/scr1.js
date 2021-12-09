"use strict";
"use strict";

const form = document.querySelector("form");
const textInput = document.querySelector("input");
const textArea = document.querySelector("textarea");
const button = document.querySelector("button");
const loadingImage = document.querySelector(".loading-image");
button.setAttribute("disabled", "true");

const setIsLoading = () => {
  loadingImage.classList.toggle("is-loading");
};

const onCheckDisable = ({ target, elem }) => {
  const resultText = document.querySelector("h1");
  if (resultText) resultText.remove();
  if (target.value && elem.value && button.hasAttribute("disabled")) {
    button.removeAttribute("disabled");
  }
  if (
    (!target.value && !button.hasAttribute("disabled")) ||
    (!elem.value && !button.hasAttribute("disabled"))
  ) {
    button.setAttribute("disabled", "true");
  }
};

const onSubmitForm = async (e) => {
  e.preventDefault();
  setIsLoading();
  const resultText = document.querySelector("h1");
  if (resultText) resultText.remove();
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
    setIsLoading();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1> Сообщение отправлено успешно ${result.data}</h1>`
    );
  } catch (error) {
    setIsLoading();
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h1> Не удалось отправить сообщение - ошибка ${error.name}</h1>`
    );
  }
};

form.addEventListener("submit", onSubmitForm);
textInput.addEventListener("change", (e) =>
  onCheckDisable({ target: e.target, elem: textArea })
);
textArea.addEventListener("change", (e) =>
  onCheckDisable({ target: e.target, elem: textInput })
);
