"use strict";

const CLASS_DARK_MODE = "dark-mode";

const switchTheme = () => {
    body.classList.toggle(CLASS_DARK_MODE);
    sunElement.classList.toggle("active");
    moonElement.classList.toggle("active");

}

const body = document.querySelector("body");
const sunElement = document.getElementById("sun");
const moonElement = document.getElementById("moon");


sunElement.addEventListener("click", switchTheme);
moonElement.addEventListener("click", switchTheme);

