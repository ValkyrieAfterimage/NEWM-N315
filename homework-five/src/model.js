import { home } from "../pages/home.js";
import { shop } from "../pages/shop.js";
import { guides } from "../pages/guides.js";
import { about } from "../pages/about.js";
import { contact } from "../pages/contact.js";
import { login } from "../pages/login.js";
import { signup } from "../pages/signup.js";

export function changePage(pageName) {
  document.body.classList.remove("open");
  document.querySelector("#app").innerHTML = pages[pageName];
}

const pages = {
  home,
  shop,
  guides,
  about,
  contact,
  login,
  signup,
};
