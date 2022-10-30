'use strict';

/** @type {import('sequelize-cli').Migration} */
let generos = ["Female","Male","Non-binary"]
let generosDeUsuarios = generos.map(genero =>{
  return {genero: genero}
})
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('generos', generosDeUsuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('generos', null, {});
  }
};
