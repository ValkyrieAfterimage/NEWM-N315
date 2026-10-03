import { loadPage } from "../src/model.js";
import { showToast } from "../src/utility.js";

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
  showToast("Loading data...", "loading");

  setTimeout(() => {
    data.innerHTML = `
    <h2>Student Data</h2>
    <p>Name: John Cena</p>
    <p>Email: ________@wwe.com</p>
    <p>Name: Jeff Mangum</p>
    <p>Email: communistdaughter@gmail.com</p>
    `;

    showToast("Data Loaded Successfully", "success");
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

    if (email == "") {
      showToast("ummm you literally didn't email", "error");
      return;
    }

    if (!email.includes("@") && !email.includes(".")) {
      showToast("literally not an email?", "error");
      return;
    }

    if (password == "") {
      showToast("ummm you literally didn't password", "error");
      return;
    }

    if (password.length < 6) {
      showToast("gotta be at least 6 characters", "error");
      return;
    }

    isLoggedIn = true;
    loginBtn.innerHTML = "logout";
    showToast("hey good job you're signed up", "success");
    loginModal.classList.remove("modal--show");
    loginForm.reset();
  });
}

function initApp() {
  initURLListener();
  initLogin();
}

initApp();
