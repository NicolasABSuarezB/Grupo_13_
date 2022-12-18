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
      usuarios.belongsTo(models.paises,{
        as:'pais',
        foreignKey: 'id_paises'
      })
      usuarios.belongsTo(models.generos,{
        as:'generos',
        foreignKey: 'id_generos'
      })
      usuarios.belongsTo(models.roles,{
        as:'roles',
        foreignKey: 'id_roles'
      }),
      usuarios.hasMany(models.carritos,{
        as:'carritos',
        foreignKey:'id_usuario'

      }),
      usuarios.hasMany(models.ordenes,{
        as:'ordenes',
        foreignKey:'id_usuarios'

      }),
      usuarios.hasMany(models.recomendados,{
        as:'recomendados',
        foreignKey:'id_usuario'

      })
    
    }
    
  }
  
  usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrase: DataTypes.STRING,
    foto: DataTypes.STRING,
    direccion: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    id_roles: DataTypes.INTEGER,
    id_paises :DataTypes.INTEGER,
    id_generos :DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};