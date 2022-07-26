// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      //making Id with auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //making product_name a string and cannot be null
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      //making price with a validation to check if its a decimal
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true
      }
    },
    //making stock ineteger and validation to check if its a numerical value
    stock:{
    type: DataTypes.INTEGER,
    allowNull: false,
      validate:{
        isNumeric: true,
      }
    },
    //category id which referneces category (id)
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    //sequelize with a model name of product
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
