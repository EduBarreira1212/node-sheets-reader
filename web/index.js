const registerBtn = document.getElementById("register-btn");
const searchBtn = document.getElementById("search-btn");
const registerSec = document.getElementById("register-section");
const searchSec = document.getElementById("search-section");
const registerForm = document.getElementById("register-form");
const searchForm = document.getElementById("search-form");
const userSec = document.getElementById("user-data-section");

const baseURL = "https://node-sheets-reader.onrender.com";

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

    fetch(`${baseURL}/api/update-sheet`, {
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
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log("Error on requisition:", error);
    });
});

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    fetch(`${baseURL}/api/get-data?name=${formElements["name"].value}&password=${formElements["password"].value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error on response")
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            userSec.style.display = "flex";
            const secElements = userSec.getElementsByClassName("user-info");
            for (const key in data) { 
                secElements[key].textContent = data[key];
            }
        })
        .catch(error => {
            console.log("Error on requisition:", error);
        });
});