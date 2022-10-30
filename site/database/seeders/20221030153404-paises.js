'use strict';

/** @type {import('sequelize-cli').Migration} */
let paises = ["Argentina","Chile","Uruguay","Brasil","Peru"]
let paisDelUsuario = paises.map(pais =>{
  return {pais: pais}
})
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('paises', paisDelUsuario, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('paises', null, {});
  }
};
