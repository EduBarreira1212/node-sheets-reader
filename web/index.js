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
    event.preventDefault();

    const formElements = event.target.elements;
    const userForm = {
        Email: formElements["email"].value,
        Name: formElements["name"].value,
        Password: formElements["password"].value,
        Phone: formElements["phone"].value,
        CEP: formElements["CEP"].value,
    }

    fetch("http://localhost:3000/api/update-sheet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userForm),
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Error on response")
        }
        console.log(response);
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log("Error on requisition:", error);
    });
});