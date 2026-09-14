import { loadData, changePage } from "../model/model.js";

// page switcher

function initListeners() {
  //   UNCOMMENT THIS LINE!!!
  changePage("home");

  const navLinks = document.querySelectorAll(".pagelink");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let btnId = e.currentTarget.id;
      changePage(btnId);
    });
  });
}

initListeners();

// load data button controller

const loadDataBin = document.querySelector("#loadDataBtn");

loadDataBin.addEventListener("click", () => {
  loadData("Katie", myReturnedData);
});

function myReturnedData(data) {
  console.log("my data is this: ", data);
}
