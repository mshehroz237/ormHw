//getting dotenv to hde password
require('dotenv').config();
//getting sequelize
const Sequelize = require('sequelize');
//setting up sequelize and connecting to mysql databse
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'root', 'Sandhu89@', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
