const registerBtn = document.getElementById("register-btn");
const searchBtn = document.getElementById("search-btn");
const registerSec = document.getElementById("register-section");
const searchSec = document.getElementById("search-section");

registerBtn.addEventListener("click", () => {
    registerSec.classList.toggle("hidden");
});

searchBtn.addEventListener("click", () => {
    searchSec.classList.toggle("hidden");
});