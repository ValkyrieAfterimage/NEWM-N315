export default function login() {
  return `
    <div class="login">
        <div class="login__container">
            <form class="login__column" id="login-form">
                <h2>Login Here!</h2>
                <div class="input-box">
                    <label for="email">Email Address</label>
                    <input id="login-email" name="email" type="email" />
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input id="login-password" name="password" type="password"/>
                </div>
                <button id="login" type="submit">Login</button>
            </form>
            <form class="login__column" id="signup-form">
                <p>Don't have an account?</p>
                <h2>Sign Up!</h2>
                <div class="input-box">
                    <label for="first-name">First Name</label>
                    <input id="signup-first-name" name="first-name" type="text" />
                </div>
                <div class="input-box">
                    <label for="last-name">Last Name</label>
                    <input id="signup-last-name" name="last-name" type="text" />
                </div>
                <div class="input-box">
                    <label for="email">Email Address</label>
                    <input id="signup-email" name="email" type="email" />
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input id="signup-password" name="password" type="password" />
                </div>
                <button id="signup" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
  `;
}

import { auth } from "../src/firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function init() {
  document.querySelector("#signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username =
      document.querySelector("#signup-first-name").value +
      " " +
      document.querySelector("#signup-last-name").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    console.log(
      "Sign up form submitted with user:",
      username,
      "email:",
      email,
      "and password:",
      password,
    );
    signUp(email, password);
    localStorage.setItem("username", JSON.stringify(username));
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

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User signed up:", userCredential.user);
      alert("signed up!");
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
      alert("logged in!");
      window.location.hash = "home";
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }
}
