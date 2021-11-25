"use strict";
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const mailDataJSON = JSON.stringify(formData);
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: mailDataJSON,
  });
  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log("error");
  }
});
