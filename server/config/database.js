import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path: "../.env"});

const sequelize = new Sequelize(`postgresql://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:24923/railway`);

export default sequelize;