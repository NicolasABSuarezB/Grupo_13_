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
      paises.belongsTo(models.usuarios,{
        as:'pais',
        foreignKey:'id_paises'
      })
    }
  }
  paises.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paises',
    timestamps: false
  });
  return paises;
};