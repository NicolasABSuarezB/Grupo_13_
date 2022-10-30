'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class generos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      generos.hasMany(models.usuarios,{
        as:'usuario',
        foreignKey:'id_generos'
      })
    }
  }
  generos.init({
    genero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'generos',
    timestamps:false
  });
  return generos;
};