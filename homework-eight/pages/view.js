export default function view() {
  return `
    <div class="view">
        <div class="view__container">
            <div class="overview">
            <div class="overview__image"><p>Supreme Pizza</p></div>
            <div class="overview__description">
                <h2>Description:</h2>
                <p>
                Make pizza night super duper out of this world with homemade
                pizza. This recipe is supreme with vegetables and two types of
                meat. Yum!
                </p>
                <p>Total Time:</p>
                <p>1h 24min</p>
                <p>Servings:</p>
                <p>4 servings</p>
            </div>
            </div>
            <div class="list">
            <h2>Ingredients:</h2>
            <p>
                1/4 batch pizza dough<br />
                2 tablespoons Last-Minute Pizza Sauce<br />
                10 slices pepperoni<br />
                1 cup cooked and crumbled Italian sausage<br />
                2 large mushrooms, sliced<br />
                1/4 bell pepper, sliced<br />
                1 tablespoon sliced black olives<br />
                1 cup shredded mozzarella cheese
            </p>
            </div>
            <div class="list">
            <h2>Instructions</h2>
            <p>
                1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking
                or line a baking sheet with parchment paper.<br />
                2. Flatten dough into a thin round and place on the pizza pan.<br />
                3. Spread pizza sauce over the dough.<br />
                4. Layer the toppings over the dough in the order listed .<br />
                5. Bake for 8 to 10 minutes or until the crust is crisp and the
                cheese melted and lightly browned.
            </p>
            </div>
            <button id="edit">Edit Recipe</button>
        </div>
    </div>
  `;
}
