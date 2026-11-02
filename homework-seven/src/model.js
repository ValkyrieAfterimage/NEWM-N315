import { auth } from "./firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const pages = import.meta.glob("../pages/*.js");

export async function loadPage(pageID) {
  document.body.classList.remove("open");

  const app = document.querySelector("#app");
  const path = `../pages/${pageID}.js`;

  if (!pages[path]) {
    app.innerHTML = `<h1>404 - Page Not Found</h1>`;
    return;
  }

  const module = await pages[path]();
  app.innerHTML = module.default();
  console.log(`${pageID} page loaded!`);

  // look for buttons on the page

  let loginButtons = document.querySelectorAll("#login-nav");

  document.querySelector("#view")?.addEventListener("click", () => {
    window.location.hash = "view";
  });
  document.querySelector("#edit")?.addEventListener("click", () => {
    window.location.hash = "edit";
  });

  // login stuff

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User signed up:", userCredential.user);
      window.location.hash = "home";
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User logged in:", userCredential.user);
      window.location.hash = "home";
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
      document.body.classList.add("signedin");
      loginButtons.forEach((b) => (b.innerHTML = "Logout"));
      loginButtons.forEach((button) =>
        button.addEventListener("click", () => {
          logout();
        }),
      );
    } else {
      console.log("No user is signed in.");
      document.body.classList.remove("signedin");
      loginButtons.forEach((b) => (b.innerHTML = "Login"));
      loginButtons.forEach((button) =>
        button.addEventListener("click", () => {
          window.location.hash = "login";
        }),
      );
    }
  });

  async function logout() {
    try {
      await signOut(auth);
      console.log("User signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  document.querySelector("#signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    console.log(
      "Sign up form submitted with email:",
      email,
      "and password:",
      password,
    );
    signUp(email, password);
  });

  document.querySelector("#login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    console.log(
      "Login form submitted with email:",
      email,
      "and password:",
      password,
    );
    login(email, password);
  });

  // document.getElementById("logoutButton")?.addEventListener("click", (e) => {
  //   logout();
  // });
}
