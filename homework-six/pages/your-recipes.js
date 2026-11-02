export default function yourRecipes() {
  return `
  <div class="recipes">
    <div class="recipes__container">
      <h1>Hey Michael, here are your recipes!</h1>
      <div class="cards">
        <div class="card">
          <div class="card__image card--pizza">
            <button id="view">View</button>
          </div>
          <div class="card__desc">
            <h2>Supreme Pizza</h2>
            <p>
              Make pizza night super duper out of this world with homemade
              pizza. This recipe is supreme with vegetables and two types of
              meat. Yum!
            </p>
            <div class="desc__number">
              <div class="icon time"></div>
              <p>1h 24min</p>
            </div>
            <div class="desc__number">
              <div class="icon servings"></div>
              <p>4 servings</p>
            </div>
          </div>
          <div class="card__bottom-buttons">
            <button class="edit" id="edit">Edit Recipe</button>
            <button class="delete" id="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
