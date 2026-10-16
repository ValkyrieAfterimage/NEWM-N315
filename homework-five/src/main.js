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
import { changePage } from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

function initURLListener() {
  changePage("home");
  window.addEventListener("hashchange", changeRoute);
}

// account stuff
import { showToast } from "./utility.js";

const logButton = document.querySelector("#log-button");

let firstName;
let lastName;
let email;
let password;

let loggedIn = false;

function loadLogin() {
  const loginEm = document.querySelector("#login-email");
  const loginPw = document.querySelector("#login-password");

  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (loggedIn === true) {
      showToast("You are already logged in.", "error");
      return;
    }

    if (loginEm.value.toLowerCase() === email && loginPw.value === password) {
      showToast(
        `You have logged in successfully. Welcome back ${firstName} ${lastName}!`,
        "success",
      );
      loggedIn = true;
      logButton.innerHTML = "Logout";
    } else {
      showToast("Wrong email or password.", "error");
      return;
    }
  });

  const signupLink = document.querySelector("#signup-link");
  signupLink.addEventListener("click", () => {
    // signup page stuff
    changePage("signup");
    loadSignup();
  });
}

function loadSignup() {
  const signupFN = document.querySelector("#first-name");
  const signupLN = document.querySelector("#last-name");
  const signupEm = document.querySelector("#signup-email");
  const signupPw = document.querySelector("#signup-password");
  const signupPC = document.querySelector("#signup-confirm-password");

  const signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (loggedIn === true) {
      showToast("You are already logged in.", "error");
      return;
    }

    // validate
    if (
      signupFN.value === "" ||
      signupLN.value === "" ||
      signupEm.value === "" ||
      signupPw.value === "" ||
      signupPC.value === ""
    ) {
      showToast("Please complete all required fields.", "error");
      return;
    } else if (!signupEm.value.includes("@") && !signupEm.value.includes(".")) {
      showToast("Enter a valid email address.", "error");
      return;
    } else if (signupPw.value.length < 6) {
      showToast("Enter a password longer than 6 characters.", "error");
      return;
    } else if (signupPw.value != signupPC.value) {
      showToast("Passwords do not match.", "error");
      return;
    }

    // THEN change stuff
    firstName = signupFN.value;
    lastName = signupLN.value;
    email = signupEm.value.toLowerCase();
    password = signupPw.value;

    showToast("Your account has been created.", "success");
    loggedIn = true;
    logButton.innerHTML = "Logout";
  });

  const loginLink = document.querySelector("#login-link");
  loginLink.addEventListener("click", () => {
    // login page stuff
    changePage("login");
    loadLogin();
  });
}

function initAccounts() {
  logButton.addEventListener("click", () => {
    if (loggedIn === true) {
      if (document.querySelector("#toast") != null) {
        showToast("You have logged out successfully.", "success");
      }
      loggedIn = false;
      logButton.innerHTML = "Login";
      return;
    }

    // login page stuff
    changePage("login");
    loadLogin();
  });
}

// start it
function initApp() {
  initURLListener();
  initAccounts();
}

initApp();
