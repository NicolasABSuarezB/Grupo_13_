'use strict';

let listado = ['puppy','raza','milka']

let marcas = listado.map(marca => {
  let elemento = {
    marca: marca,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('marcas', marcas , {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('marcas',null, {});
     
  }
};
