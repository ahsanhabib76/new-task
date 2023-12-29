const navLinks = document.getElementById("navLinks");
const bars = document.querySelector("#bar");
const xmark = document.querySelector("#xmark");

bars.addEventListener("click", () => {
  navLinks.style.left = "0";
});

xmark.addEventListener("click", () => {
  navLinks.style.left = "-205px";
});

// Search btn
const search = document.querySelector("#search");
const formControll = document.querySelector(".form-control");

search.addEventListener("click", () => {
  formControll.style.display = "block";
});
