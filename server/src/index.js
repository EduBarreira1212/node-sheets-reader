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

const rows = await sheet.getRows();

app.use((req, res, next) => {
    if(req.body){
        console.log(req.method);
        console.log(req.body);
    }else if(req.params){
        console.log(req.method);
        console.log(req.params);
    }else{
        console.log(req.method);
        console.log(req.url);
    }
    next();
});

const authenticateUser = async (req, res, next) => {
    const { name, password } = req.query;
    const user = await User.findOne({where: {name: name, password: password}});

    if(user){
        req.user = user;
        next();
    }else{
        res.status(401).send("Invalid credentials");
    }
}

app.post("/api/update-sheet", async (req, res) => {
    const {userForm} = JSON.parse(req.body);
    
    const userAdded = await sheet.addRow({Email: userForm.Email, Name: userForm.Name, Password: userForm.Password, Phone: userForm.Phone, CEP: userForm.CEP});
    console.log(userAdded);

    res.status(200).send(userAdded);
});

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

app.get("/api/get-data", async (req, res) => {
    const { name, password } = req.query;

    const user = await User.findOne({where: {name: name, password: password}});
    if(!user){
        res.status(404).send("User not found");
    }
    console.log(user);
    res.status(200).send(user);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});