import home from "../pages/home.js";
import about from "../pages/about.js";
import products from "../pages/products.js";
import locations from "../pages/locations.js";
import contact from "../pages/contact.js";

export function loadPage(pageID) {
  console.log(`model.js ${pageID}`);

  switch (pageID) {
    case "home":
      document.querySelector("#app").innerHTML = home;
      break;
    case "about":
      document.querySelector("#app").innerHTML = about;
      break;
    case "products":
      document.querySelector("#app").innerHTML = products;
      break;
    case "locations":
      document.querySelector("#app").innerHTML = locations;
      break;
    case "contact":
      document.querySelector("#app").innerHTML = contact;
      break;
    default:
      document.querySelector("#app").innerHTML = home;
      break;
  }
}
