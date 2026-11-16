// firebase, vite, etc
import "./scss/styles.scss";
import { auth } from "./firebase/firebase.js";

console.log("Firebase initialized:", auth);

// mobile nav
const hamburger = document.querySelector("#hamburger-icon");
const cover = document.querySelector(".cover");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

cover.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

// page changer

import { loadPage } from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  loadPage(pageID);
}

function initURLListener() {
  loadPage("home");
  window.addEventListener("hashchange", changeRoute);
}

// init

function initApp() {
  initURLListener();
}

initApp();
