'use strict';
const {
  Model
} = require('sequelize');
const generos = require('./generos');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      usuarios.hasMany(models.paises,{
        as:'paises',
        foreignKey: 'id_pais'
      })
    }
    static associate(models) {
      usuarios.hasMany(models.generos,{
        as:'generos',
        foreignKey: 'id_generos'
      })
    }
    static associate(models) {
      usuarios.hasMany(models.roles,{
        as:'roles',
        foreignKey: 'idroles'
      })
    }
    
  }
  
  usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrase: DataTypes.STRING,
    foto: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};