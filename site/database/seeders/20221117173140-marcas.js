'use strict';

let listado = ['purina','royal canin','Whiskas']
let imagen=['purinamarca.jfif','royalcanin.png','Whiskas-logo.png']
let descripcion=['purina es una marca endocada al cuidado de su perro usmos los mejores ingredientes y cremos que las mascotas son parte de la familia',
'usando los mejores materiales, de la mas alta calidad nos orgullecemos de la calidad de lo que fabricamos, con una buena variedad de alimentaos',
'si buscas mimar a tu gato estas frente la empresa indicada, con mas de 40 años de experencia creamos los alimentos para gatos mas deliciosos y nutririvos']
let subida=[]
listado.forEach((lita,index)=>{
  let elemento = {
    marca: lita,
    descripcion: descripcion[index],
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
