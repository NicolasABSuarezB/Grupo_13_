'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      roles.hasMany(models.usuarios,{
        as:'roles',
        foreignKey:'id_roles'
      })
    }
  }
  roles.init({
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
    timestamps: false
  });
  return roles;
};