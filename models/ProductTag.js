const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      //making a id with auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //making product_id which references (product) id
    product_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    }
    },
    //making a tag_id which references tag(id)
    tag_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id'
    }

    }
    },
  {
    //sequelize with a model name of product_name
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
