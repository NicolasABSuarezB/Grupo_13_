const fs =require('fs')

const productos = require("../data/productos.json")
const path = require('path')
let nuevoGuardar =(guardar)=> fs.writeFileSync(path.join(__dirname, '../data/productos.json'),JSON.stringify(guardar,null,4),'utf-8')


const{validationResult}=require('express-validator')
module.exports={
    
    edit: (req,res)=>{
        //validar(req.session.sessionuser,res)

       
         id = +req.params.id
        let producto = productos.find((elemento)=>{
            return elemento.id==id;
        })

        let categorias=["gatos","perros","aves","peces"]

        return res.render('admin/editarProducto',{producto,categorias})
    },
    create: (req,res)=>{
        validar(req.session.sessionuser,res)
        return res.render('admin/crearProducto',{productos})
    },
    lista: (req,res)=>{
        //validar(req.session.sessionuser,res)
        return res.render('admin/listaProducto',{productos})
    }, 
    nuevo: (req,res)=>{
        let errors= validationResult(req)
        

        if(errors.isEmpty()){

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
        }else{
            res.render('admin/crearProducto',{productos, errors:errors.mapped(), old:req.body})
            
        }
        

        
        
    },
    editado:(req,res)=>{
        let errors= validationResult(req)
        let identificar = +req.params.id

        if(errors.isEmpty()){
            

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
        }else{

            let producto = productos.find((elemento)=>{
                return elemento.id==identificar;
            })
    
            let categorias=["gatos","perros","aves","peces"]
            
            //return res.send({old:req.body.Precio})
            return res.render('admin/editarProducto',{producto,categorias,
                errors:errors.mapped(),
                old: req.body}
                )
        

            
        }
        

    },
    destruir:(req,res)=>{
        iddestruir = +req.params.id;

        let productoModificado= productos.filter(producto => producto.id !== iddestruir)
        nuevoGuardar(productoModificado)
        return res.redirect('/admin/lista')
        
        
    }
        
}