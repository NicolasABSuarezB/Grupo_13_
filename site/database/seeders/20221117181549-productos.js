'use strict';

const { DATE } = require('sequelize');
let lista=require('../../data/productos.json')

let listadoCategorias = ['gato','perro','ave','peces']
let listamarcas=[ "purina dog",]
let product=[]

lista.forEach(producto => {
  let categoria
  let marca=2
  
  
  listadoCategorias.forEach((categoriaLista,index) => {
    if (categoriaLista == producto.categorias) {
        return categoria = index + 1
    }
  });
  listamarcas.forEach((marcas,index) => {
    if (marcas == producto.marca) {
        return marca = index + 1
    }
  })
  console.log(categoria)
 

  let nuevo = {
    id:producto.id,
    titulo: producto.titulo,
    stock: producto.stock,
    precio: producto.precio,
    descuento: 0,
    descripcion: producto.descripcion,
    id_categoria: categoria,
    id_marcas: marca,
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
