# Spreadsheet reader App

This project is a spreadsheet reader App built using JavaScrit. To use you need to register a user, this user will be send to a spreadsheet then the app will read this spreadsheet and save in a postgreSQL database, to get a user's info, you can search using the email and password, it will be displayed below the form.

Link to see the project: https://spreadsheets-reader-eb1212.vercel.app/

Link to see the spreadsheet: https://docs.google.com/spreadsheets/d/17xVeMmu0WQGz2el-c2VZWuuEKHGfgRR4acpJth3aPkg/edit?usp=sharing

## Features

* Write on spreadsheet using google-spreadsheet
* Read the spreadsheet and save on DB using Sequelize ORM
* Search user using email and password, after call the API, it'll be redirect to a auth middleware
* If pass it'll show the user's info


## Stack

**Front-end:** JavaScript  
**Back-end:** Node.js  
**Packages:** express, cors, dotenv, google-auth-library, google-spreadsheet, sequelize, pg


## Learnings

In this project i learned how to use Sequelize and how to read and write in a spreadsheet.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Enviroments variables

To run this project, you need to add this variable in your .env file

`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `DB_PASSWORD` and `DB_HOST`

To create `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY`: https://console.cloud.google.com/

To create `DB_PASSWORD` and `DB_HOST`: https://railway.app/

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/EduBarreira1212/notepad.git
    cd notepad
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```
3. Inicie o servidor

    ```bash
    cd server
    npm run start
    ```
## Author

- [@EduBarreira1212](https://github.com/EduBarreira1212)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)