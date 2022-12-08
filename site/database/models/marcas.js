'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marcas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      marcas.hasMany(models.productos,{
        as:'productoS',
        foreignKey:'id_categoria'

      })
    }
  }
  marcas.init({
    marca: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'marcas',
  });
  return marcas;
};