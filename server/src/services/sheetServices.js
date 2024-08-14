import { createNewUser } from "../repositories/sheetRepositorie.js";
import User from "../models/User.js";
import { sheet } from "../index.js";
import bcrypt from "bcrypt";

export const updateSheets = async (userForm) => {
    const encryptedPassword = bcrypt.hashSync(userForm.password, 10);
    const userAdded = await sheet.addRow({Email: userForm.email, Name: userForm.name, Password: encryptedPassword, Phone: userForm.phone, CEP: userForm.CEP});
    return userAdded;
}

export const getSheets = async (rows) => {
    await User.sync();

    for (let i = 0; i < rows.length; i++) {
        const user = {
            email: rows[i].get('Email'),
            name: rows[i].get('Name'),
            password: rows[i].get('Password'),
            phone: rows[i].get('Phone'),
            CEP: rows[i].get('CEP'),
        };
        const userCreated = await createNewUser(rows[i].get('Email'), user);
        console.log(userCreated);
    }
}