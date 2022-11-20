'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carritos.belongsTo(models.usuarios,{
        as:'usuario',
        foreignKey:'id_usuario'

      }),
      carritos.belongsTo(models.productos,{
        as:'producto',
        foreignKey:'id_producto'

      }),
      carritos.hasMany(models.ordenes,{
        as:'ordenes',
        foreignKey:'id_carritos'

      })
    }
  }
  carritos.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carritos',
  });
  return carritos;
};