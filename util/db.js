const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.POSTGRESQL_DB_URI,
        dialect: 'postgres',
    }

);

// const testDbConnection = async () => {
//     try {
//         await sequelize.sync({ force: false });
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error.message);
//     }
// };


module.exports = sequelize