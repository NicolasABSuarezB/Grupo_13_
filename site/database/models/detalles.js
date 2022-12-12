'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detalle.belongsTo(models.usuarios,{
        as:'usuarios',
        foreignKey:'id_usuario'

      }),
      detalle.belongsTo(models.productos,{
        as:'productos',
        foreignKey:'id_producto'

      })
    }
  }
  detalle.init({
    puntaje: DataTypes.INTEGER,
    comentarios: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'detalles',
  });
  return detalle;
};