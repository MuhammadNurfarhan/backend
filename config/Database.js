import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'farhan', 'Alfarh123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;