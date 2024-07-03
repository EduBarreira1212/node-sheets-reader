import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("Users", {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    CEP: DataTypes.STRING,
});

export default User;