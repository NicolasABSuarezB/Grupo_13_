const fs =require('fs')
const path =require('path')
const productos = require("../data/productos.json")

let nuevoGuardar =(guardar)=> fs.writeFileSync(path.join(__dirname, '../data/productos.json'),JSON.stringify(guardar,null,4),'utf-8')


module.exports={
    
    edit: (req,res)=>{

         id = +req.params.id
        let producto = productos.find((elemento)=>{
            return elemento.id==id;
        })

        let categorias=["gatos","perros","aves","peces"]

        return res.render('admin/editarProducto.ejs',{producto,categorias})
    },
    create: (req,res)=>{
        return res.render('admin/crearProducto.ejs',{productos})
    },
    lista: (req,res)=>{
        return res.render('admin/listaProducto.ejs',{productos})
    }, 
    nuevo: (req,res)=>{

        let {Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body;

        let nuevoProducto={
            id: productos[productos.length -1].id + 1,
            
            titulo: Titulo,
            precio:+Precio,
            descuento:+Descuento,
            stock:+Stock,
            descripcion:Descripcion,
            categorias:Categoria,
            imagenes:"default-img.png"
        }
        productos.push(nuevoProducto);
        
        nuevoGuardar(productos);

        res.redirect('/admin/lista')
        
        
    },
    editado:(req,res)=>{
        identificar = +req.params.id

        let {Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body;

        productos.forEach(modificado => {
            if(modificado.id===identificar){
                modificado.titulo=Titulo;
                modificado.categorias=Categoria;
                modificado.precio=+Precio;
                modificado.descuento=+Descuento;
                modificado.stock=+Stock;
                modificado.descripcion=Descripcion;


            }
            
            
        });
        nuevoGuardar(productos)
        return res.redirect('/admin/lista')

    },
    destruir:(req,res)=>{
        iddestruir = +req.params.id;

        let productoModificado= productos.filter(producto => producto.id !== iddestruir)
        nuevoGuardar(productoModificado)
        return res.redirect('/admin/lista')
        
        
    }
        
}