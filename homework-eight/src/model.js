import { auth } from "./firebase/firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";

const pages = import.meta.glob("../pages/*.js");

export async function loadPage(pageID) {
  document.body.classList.remove("open");

  const app = document.querySelector("#app");
  const path = `../pages/${pageID}.js`;

  try {
    if (!pages[path]) {
      app.innerHTML = `<h1>404 - Page Not Found</h1>`;
      return;
    }

    const module = await pages[path]();
    app.innerHTML = module.default();
    console.log(`${pageID} page loaded!`);

    if (typeof module.init === "function") {
      module.init();
    }
  } catch (error) {
    console.error("error loading page:", error);
    app.innerHTML = `<h1>Error Loading Page!</h1>`;
  }

  // header login

  let loginButtons = document.querySelectorAll("#login-nav");

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
}

export function getRecipes() {
  const savedRecipes = localStorage.getItem("recipes");
  if (savedRecipes) {
    return JSON.parse(savedRecipes);
  } else {
    return [];
  }
}

export async function addRecipe(recipe) {
  try {
    const allRecipes = getRecipes();
    const newRecipe = {
      id: crypto.randomUUID(),
      ...recipe,
    };
    allRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(allRecipes));
    console.log("new recipe:", newRecipe);
    console.log("all recipes:", allRecipes);
    return newRecipe;
  } catch (error) {
    console.error("error saving recipe:", error);
    throw error;
  }
}
