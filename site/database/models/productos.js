'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productos.belongsTo(models.categorias,{
        as:'categorias',
        foreignKey:'id_categoria'

      }),
      productos.belongsTo(models.marcas,{
        as:'marcas',
        foreignKey:'id_marcas'

      }),
      productos.hasMany(models.carritos,{
        as:'carritos',
        foreignKey:'id_producto'

      })
      
    }
  }
  productos.init({
    titulo: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    descuento: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    id_marcas: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};