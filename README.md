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

**Front-end:** React with TypeScript  
**Back-end:** Node.js  
**Packages:** axios, express, cors, dotenv, google-auth-library, google-spreadsheet, sequelize, pg, tailwindcss, react-hook-form


## Learnings

In this project i learned how to use Sequelize, how to read and write in a spreadsheet, to add style with Tailwind CSS and use react hook form

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
    git clone https://github.com/EduBarreira1212/spreadsheet-reader.git
    cd spread-sheet
    ```

2. Install the dependencies:

    ```bash
    cd server
    npm install
    cd web
    cd user-register
    npm install
    ```
3. Inicie o servidor

    ```bash
    cd server
    npm run start
    ```
## Available Scripts

In the user-register directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Author

- [@EduBarreira1212](https://github.com/EduBarreira1212)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)