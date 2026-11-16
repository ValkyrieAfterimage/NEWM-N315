const username = JSON.parse(localStorage.getItem("username"));

export default function yourRecipes() {
  return `
  <div class="recipes">
    <div class="recipes__container">
      <h1>Hey ${username}, here are your recipes!</h1>
      <div id="cards" class="cards your-cards">
        <p>No recipes found...</p>
      </div>
    </div>
  </div>
  `;
}

import { getRecipes } from "../src/model.js";

export function init() {
  const allRecipes = getRecipes();
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";

  allRecipes.forEach((recipe) => {
    cards.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="card__image card--pizza">
          <button id="view">View</button>
        </div>
        <div class="card__desc">
          <h2>${recipe.name}</h2>
          <p>
            ${recipe.description}
          </p>
          <div class="desc__number">
            <div class="icon time"></div>
            <p>${recipe.time}</p>
          </div>
          <div class="desc__number">
            <div class="icon servings"></div>
            <p>${recipe.size}</p>
          </div>
        </div>
        <div class="card__bottom-buttons">
          <button class="edit" id="edit">Edit Recipe</button>
          <button class="delete" id="delete">Delete</button>
        </div>
      </div>
      `,
    );
  });

  document.querySelector("#view")?.addEventListener("click", () => {
    window.location.hash = "view";
  });
  document.querySelector("#edit")?.addEventListener("click", () => {
    window.location.hash = "edit";
  });
}
