export default function edit() {
  return `
    <div class="edit">
        <div class="edit__container">
          <h2>Hey Michael, edit your recipe!</h2>
          <div class="edit__image">
            <p>Edit Recipe Image</p>
            <button>Attach File</button>
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
            <label for="instructions">Edit Instructions:</label>
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
