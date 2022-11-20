'use strict';

let listado = ['gato','perro','ave','peces']

let categorias = listado.map(categoria => {
  let elemento = {
    categoria: categoria,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('categorias',categorias , {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('categorias', null, {});
     
  }
};
