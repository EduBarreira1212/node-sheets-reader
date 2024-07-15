import {JWT} from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet"
import dotenv from "dotenv";
import cors from "cors";
import express from 'express';
import updateSheet from "./controllers/sheetController.js";
import getData from "./controllers/sheetController.js";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config({path: ".env"});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

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

app.use(loggerMiddleware);

app.post("/api/update-sheet", updateSheet);

app.get("/api/get-data", authMiddleware, getData);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});