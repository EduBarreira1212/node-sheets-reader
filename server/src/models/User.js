import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path: "../.env"});

const sequelize = new Sequelize(`postgresql://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:24923/railway`);

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