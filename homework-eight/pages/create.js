const username = JSON.parse(localStorage.getItem("username"));

export default function create() {
  return `
    <div class="edit">
        <form id="create-form" class="edit__container">
          <h2>Hey ${username}, create your recipe!</h2>
          <div class="edit__image">
            <p>Add Recipe Image</p>
            <button type="button">Attach File</button>
          </div>
          <label for="name">Recipe Name</label>
          <input id="name" type="text" required/>
          <label for="description">Recipe Description</label>
          <input id="description" type="text" required/>
          <label for="time">Recipe Total Time</label>
          <input id="time" type="text" required/>
          <label for="size">Recipe Serving Size</label>
          <input id="size" type="text" required/>

          <div class="list">
            <label for="ingredients">Enter Ingredients:</label>
            <input
              class="list__item"
              id="ingredient"
              type="text"
              placeholder="Ingredient #1"
              required
            />
            <button id="ingredient-add" type="button">+</button>
          </div>
          <div class="list">
            <label for="instructions">Enter Instructions:</label>
            <input
              class="list__item"
              id="instructions"
              type="text"
              placeholder="Instruction #1"
              required
            />
            <button id="instruction-add" type="button">+</button>
          </div>
          <div class="edit__button-container">
            <input type="submit" value="Create Recipe"/>
          </div>
        </form>
      </div>
  `;
}

import { addRecipe, loadPage } from "../src/model.js";

export function init() {
  const form = document.querySelector("#create-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const time = document.querySelector("#time").value;
    const size = document.querySelector("#size").value;
    const ingredientsNodes = document.querySelectorAll("#ingredient");
    const ingredients = [];
    ingredientsNodes.values().forEach((i) => ingredients.push(i.value));

    const recipe = {
      name: name,
      description: description,
      time: time,
      size: size,
      ingredients: ingredients,
    };

    console.log("recipe submitted:", recipe);
    alert("recipe created!");
    addRecipe(recipe);
    form.reset();
    loadPage("create");
  });

  const ingBtn = document.querySelector("#ingredient-add");
  let ingCount = 1;
  ingBtn.addEventListener("click", (e) => {
    ingCount++;
    ingBtn.insertAdjacentHTML(
      "beforebegin",
      `
      <input
        class="list__item"
        id="ingredient"
        type="text"
        placeholder="Ingredient #${ingCount}"
      />
      `,
    );
  });

  const instBtn = document.querySelector("#instruction-add");
  let instCount = 1;
  instBtn.addEventListener("click", (e) => {
    instCount++;
    instBtn.insertAdjacentHTML(
      "beforebegin",
      `
      <input
        class="list__item"
        id="instruction"
        type="text"
        placeholder="Instruction #${instCount}"
      />
      `,
    );
  });
}
