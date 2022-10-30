'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      contrase: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_roles: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'roles'
          },
          key: 'id'
        }
      },
      id_paises: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'paises'
          },
          key: 'id'
        }
      },
      id_generos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'generos'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};