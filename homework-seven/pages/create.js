export default function create() {
  return `
    <div class="edit">
        <div class="edit__container">
          <h2>Hey Michael, create your recipe!</h2>
          <div class="edit__image">
            <p>Add Recipe Image</p>
            <button>Attach File</button>
          </div>
          <label for="name">Recipe Name</label>
          <input id="name" type="text" />
          <label for="description">Recipe Description</label>
          <input id="description" type="text" />
          <label for="time">Recipe Total Time</label>
          <input id="time" type="text" />
          <label for="size">Recipe Serving Size</label>
          <input id="size" type="text" />

          <div class="list">
            <label for="ingredients">Enter Ingredients:</label>
            <input
              class="list__item"
              id="ingredient-1"
              type="text"
              placeholder="Ingredient #1"
            />
            <input
              class="list__item"
              id="ingredient-2"
              type="text"
              placeholder="Ingredient #2"
            />
            <input
              class="list__item"
              id="ingredient-3"
              type="text"
              placeholder="Ingredient #3"
            />
            <button id="ingredient-add">+</button>
          </div>
          <div class="list">
            <label for="instructions">Enter Instructions:</label>
            <input
              class="list__item"
              id="instructions-1"
              type="text"
              placeholder="Instruction #1"
            />
            <input
              class="list__item"
              id="instructions-2"
              type="text"
              placeholder="Instruction #2"
            />
            <input
              class="list__item"
              id="instructions-3"
              type="text"
              placeholder="Instruction #3"
            />
            <button id="instruction-add">+</button>
          </div>
          <div class="edit__button-container">
            <button>Create Recipe</button>
          </div>
        </div>
      </div>
  `;
}
