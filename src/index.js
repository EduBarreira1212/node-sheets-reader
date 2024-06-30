import {JWT} from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet"
import dotenv from "dotenv";

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