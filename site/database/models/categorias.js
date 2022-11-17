'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      categorias.hasMany(models.productos,{
        as:'productos',
        foreignKey:'id_categoria'

      })
    }
  }
  categorias.init({
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};