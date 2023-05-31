const { Sequelize, DataTypes } = require('sequelize');
const db = require('../util/db')




const User = db.define('users', {
    username: DataTypes.STRING,
});


module.exports = User;


