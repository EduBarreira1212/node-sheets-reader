import { createNewUser } from "../repositories/sheetRepositorie.js";
import User from "../models/User.js";
import { sheet } from "../index.js";

export const updateSheets = async (userForm) => {
    const userAdded = await sheet.addRow({Email: userForm.Email, Name: userForm.Name, Password: userForm.Password, Phone: userForm.Phone, CEP: userForm.CEP});
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