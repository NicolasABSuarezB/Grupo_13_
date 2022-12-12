'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recomendados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recomendados.belongsTo(models.usuarios,{
        as:'usuarios',
        foreignKey:'id_usuario'

      }),
      recomendados.belongsTo(models.productos,{
        as:'productos',
        foreignKey:'id_producto'

      })
    }
  }
  recomendados.init({
    id_producto: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'recomendados',
  });
  return recomendados;
};