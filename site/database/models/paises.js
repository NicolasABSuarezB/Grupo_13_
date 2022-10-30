'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      paises.hasMany(models.usuarios,{
        as:'paises',
        foreignKey:'id_paises'
      })
    }
  }
  paises.init({
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paises',
    timestamps: false
  });
  return paises;
};