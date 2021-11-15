"use strict";

const input = document.querySelector("input");

input.setAttribute("id", "button");
alert(input.hasAttribute("id"));
input.setAttribute("value", "Жми");
alert(input.hasAttribute("value"));
alert(input.getAttribute("maxlength"));
alert(input.hasAttribute("value"));
input.setAttribute("type", "button");
input.setAttribute("onclick", "alert('Привет!!!')");
input.removeAttribute("maxlength");
