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
  let loginButton = document.querySelectorAll("#login-link");
  loginButton.forEach((button) =>
    button.addEventListener("click", () => {
      window.location = "#login";
    }),
  );
  let viewRecipes = document.querySelector("#view");
  viewRecipes.addEventListener("click", () => {
    window.location = "#view";
  });
  let editRecipe = document.querySelector("#edit");
  editRecipe.addEventListener("click", () => {
    window.location = "#edit";
  });
}
