import jwt from "jsonwebtoken";

import { getSheets } from "../services/sheetServices.js";
import { updateSheets } from "../services/sheetServices.js";
import { Sequelize } from "sequelize";
import { sheet } from "../index.js";

export const updateSheet = async (req, res) => {
    const userForm = req.body;

    const userAdded = await updateSheets(userForm);
    
    if (userAdded) {
        const rows = await sheet.getRows();
        console.log(rows.length);
        await getSheets(rows);
        return res.status(200).json(userForm);
    }
};

export const getData = async (req, res) => {
    const user = req.user;

    const sequelize = new Sequelize(`postgresql://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:24923/railway`);

    try {
        await sequelize.authenticate();
        console.log("Database conected");

        console.log(user.toJSON());

        res.status(200).json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            CEP: user.CEP,
            token: jwt.sign({payload: user.email}, "99c37ee59bd88f4e2e47a7595a4127c5", {
                expiresIn: "5d"
            })
        });
    } catch (error) {
        console.log("Error to conect/insert on database:", error);
    } finally {
        console.log("Close");
        sequelize.close();
    }
};