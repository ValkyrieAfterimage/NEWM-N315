import { loadPage } from "./model.js";
import { showToast } from "./utility.js";

let isLoggedIn = false;

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID) {
    loadPage(pageID);
  } else {
    loadPage("home");
  }

  initPageListeners();
}

function initURLListener() {
  window.addEventListener("hashchange", changeRoute);

  changeRoute();
}

function initPageListeners() {
  const loadBtn = document.querySelector("#loadBtn");

  //   check to make sure it exists--it will only exist on the home page
  if (loadBtn) {
    loadBtn.addEventListener("click", loadData);
  }
}

function loadData() {
  const data = document.querySelector("#data");
  showToast("Loading Toast...", "loading");

  setTimeout(() => {
    data.innerHTML = `
    <img src="https://biteswithbri.com/wp-content/uploads/2022/02/ToastOven-blog-6.jpg"/>
    `;

    showToast("Toast Loaded Successfully", "success");
  }, 2000);
}

function initLogin() {
  const loginBtn = document.querySelector("#loginBtn");
  const loginModal = document.querySelector("#loginModal");
  const closeModal = document.querySelector("#closeModal");
  const loginForm = document.querySelector("#loginForm");

  loginBtn.addEventListener("click", () => {
    if (isLoggedIn) {
      isLoggedIn = false;
      loginBtn.innerHTML = "login";
      showToast("you have successfully logged out", "info");
      return;
    }

    loginModal.classList.add("modal--show");
  });

  closeModal.addEventListener("click", () => {
    loginModal.classList.remove("modal--show");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    let success = true;

    if (email == "") {
      showToast("Enter an email, doofus", "error");
      success = false;
    } else if (!email.includes("@") && !email.includes(".")) {
      showToast("Enter a real email, doofus", "error");
      success = false;
    }

    if (password == "") {
      showToast("Enter a password, doofus", "error");
      success = false;
    }

    if (password.length < 6) {
      showToast("Enter a password longer than 5 characters", "error");
      success = false;
    }

    if (!success) {
      return;
    }

    isLoggedIn = true;
    loginBtn.innerHTML = "logout";
    showToast("You have successfully signed in :) hello", "success");
    loginModal.classList.remove("modal--show");
    loginForm.reset();
  });
}

function initApp() {
  initURLListener();
  initLogin();
}

initApp();
