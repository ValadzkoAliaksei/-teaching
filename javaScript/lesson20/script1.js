"use strict";

const form = document.querySelector("form");

const onSubmitForm = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const data = Array.from(formData.entries()).reduce(
    (prev, [name, value]) => ({
      ...prev,
      [name]: value,
    }),
    {}
  );

  const formDataJson = JSON.stringify(data);
  const response = await fetch("https://httpbin.org/postq", {
    method: "POST",
    body: formDataJson,
  });
  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log("error");
  }
};

form.addEventListener("submit", onSubmitForm);
