// firebase, vite, etc
import "./scss/styles.scss";
import { auth, db } from "./firebase.js";

console.log("Firebase initialized:", auth, db);

// mobile nav
const hamburger = document.querySelector("#hamburger-icon");
const cover = document.querySelector(".cover");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

cover.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

// button links

// const loginButton = document.querySelectorAll("#login-link");
// loginButton.forEach((button) =>
//   button.addEventListener("click", () => {
//     window.location = "#login";
//   }),
// );
// const viewRecipes = document.querySelector("#view");
// viewRecipes.addEventListener("click", () => {
//   window.location = "#view-recipes";
// });
// const editRecipe = document.querySelector("#edit");
// editRecipe.addEventListener("click", () => {
//   window.location = "#edit";
// });

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
