import {JWT} from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet"
import dotenv from "dotenv";
import express from 'express';
import sequelize from "../config/database.js";
import User from "../models/User.js";

dotenv.config({path: ".env"});

const app = express();
app.use(express.json());

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

app.post("/api/update-sheet", async (req, res) => {
    const {userForm} = req.body;
    
    const userAdded = await sheet.addRow({Email: userForm.Email, Name: userForm.Name, Password: userForm.Password, Phone: userForm.Phone, CEP: userForm.CEP});
    console.log(userAdded);

    res.status(200).send(userAdded);
});

const rows = await sheet.getRows();

app.get("/api/update-db", async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log("Database conected");

        await User.sync();

        for (let i = 0; i < rows.length; i++) {
            const user = await User.create({
                email: rows[i].get('Email'),
                name: rows[i].get('Name'),
                password: rows[i].get('Password'),
                phone: rows[i].get('Phone'),
                CEP: rows[i].get('CEP'),
            });
            console.log("New user:", user.toJSON());
        }
        res.status(200).send("Data inserted")
    } catch (error) {
        console.log("Error to conect/insert on database:", error);
    } finally {
        console.log("CLOSE");
        sequelize.close();
    }
});

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