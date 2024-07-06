const registerBtn = document.getElementById("register-btn");
const searchBtn = document.getElementById("search-btn");
const registerSec = document.getElementById("register-section");
const searchSec = document.getElementById("search-section");
const registerForm = document.getElementById("register-form");
const searchForm = document.getElementById("search-form");

registerBtn.addEventListener("click", () => {
    registerSec.classList.toggle("hidden");
});

searchBtn.addEventListener("click", () => {
    searchSec.classList.toggle("hidden");
});

registerForm.addEventListener("submit", (event) => {
    fetch("http://localHost:3000/api/update-sheet", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(event.target.value),
    })
});