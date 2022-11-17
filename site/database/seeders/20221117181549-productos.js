'use strict';

const { DATE } = require('sequelize');
let lista=require('../../data/productos.json')

let listadoCategorias = ['gato','perro','ave','peces']
let product=[]

lista.forEach(producto => {
  let categoria
  
  
  listadoCategorias.forEach((categoriaLista,index) => {
    if (categoriaLista === producto.categorias) {
        return categoria = index + 1
    }
  });

 

  let nuevo = {
    id:producto.id,
    titulo: producto.titulo,
    stock: producto.stock,
    precio: producto.precio,
    descuento: 0,
    descripcion: producto.descripcion,
    id_categoria: 1,
    id_marcas: 1,
    imagen:producto.imagenes[0],
    createdAt:new Date,
    updatedAt:new Date
  }
  product.push(nuevo)
})


module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('productos', product, {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('productos', null, {});
     
  }
};
