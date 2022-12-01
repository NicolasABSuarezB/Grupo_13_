'use strict';

let listado = ['purina','royal canin','Whiskas']
let imagen=['purinamarca.jfif','royalcanin.png','Whiskas-logo.png']
let subida=[]
listado.forEach((lita,index)=>{
  let elemento = {
    marca: lita,
    imagen: imagen[index],
    createdAt:new Date,
    updatedAt:new Date
  }
  subida.push(elemento)
}

)


module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('marcas',subida , {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('marcas',null, {});
     
  }
};
