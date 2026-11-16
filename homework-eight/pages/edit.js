export default function edit() {
  return `
    <div class="edit">
        <form id="edit-form" class="edit__container">
          <h2>Hey Michael, edit your recipe!</h2>
          <div class="edit__image">
            <p>Edit Recipe Image</p>
            <button type="button">Attach File</button>
          </div>
          <label for="name">Edit Name</label>
          <input id="name" type="text" placeholder="Supreme Pizza" />
          <label for="description">Edit Description</label>
          <input
            id="description"
            type="text"
            placeholder="Make pizza night super duper out of this…"
          />
          <label for="time">Edit Total Time</label>
          <input id="time" type="text" placeholder="1h 24min" />
          <label for="size">Edit Serving Size</label>
          <input id="size" type="text" placeholder="4 servings" />

          <div class="list">
            <label for="ingredients">Edit Ingredients:</label>
            <input
              class="list__item"
              id="ingredient"
              type="text"
              placeholder="Ingredient #1"
            />
            <button id="ingredient-add" type="button">+</button>
          </div>
          <div class="list">
            <label for="instructions">Edit Instructions:</label>
            <input
              class="list__item"
              id="instructions"
              type="text"
              placeholder="Instruction #1"
            />
            <button id="instruction-add" type="button">+</button>
          </div>
          <div class="edit__button-container">
            <input type="submit" value="Edit Recipe">
          </div>
        </form>
      </div>
  `;
}

import { addRecipe } from "../src/model.js";

export function init() {
  const form = document.querySelector("#edit-form");
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

    console.log("recipe edited:", recipe);
    addRecipe(recipe); // change this to edit somehow idk
    form.reset();
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
