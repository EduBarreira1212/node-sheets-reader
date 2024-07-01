import {JWT} from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet"
import dotenv from "dotenv";
import sheetObjects from "./sheetObjects.js";

dotenv.config({path: ".env"});

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: SCOPES,
});

const doc = new GoogleSpreadsheet('17xVeMmu0WQGz2el-c2VZWuuEKHGfgRR4acpJth3aPkg', jwt);

await doc.loadInfo();

const sheet = doc.sheetsByIndex[0];

for (const user of sheetObjects) {
    const userAdded = await sheet.addRow({Email: user.Email, Name: user.Name, Password: user.Password, Phone: user.Phone, CEP: user.CEP});
    console.log(userAdded); 
}

const rows = await sheet.getRows();

const users = [];

for (let i = 0; i < rows.length; i++) {
    const user = {
        Email: rows[i].get('Email'),
        Name: rows[i].get('Name'),
        Password: rows[i].get('Password'),
        Phone: rows[i].get('Phone'),
        CEP: rows[i].get('CEP'),
    }
    users.push(user);
}

console.table(users);

for (const user of users) {
    await fetch(`https://viacep.com.br/ws/${user.CEP}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('API response no suceded')
            }
            return response.json();
            }
        ).then(data => {
            console.log(data.logradouro);
        }).catch(error => {
            console.log(user);
            console.error("Error on requisition:", error);
        })
}