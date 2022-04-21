// setup nav
let navBtn = document.querySelector("#nav-btn");
let navBar = document.querySelector("#navbar");
let navClose = document.querySelector("#nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});
// hide nav
navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});
