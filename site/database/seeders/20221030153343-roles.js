'use strict';

/** @type {import('sequelize-cli').Migration} */
let roles = ["Usuario","Admin"]
let rolesDeUsuarios = roles.map(rol =>{
  return {rol: rol}
})
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('roles', rolesDeUsuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('roles', null, {});
  }
};