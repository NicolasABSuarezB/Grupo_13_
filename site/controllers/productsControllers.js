const db = require("../database/models")
/* let products = require("../data/products.json") */;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports={
    detalle: (req,res)=>{
        id = +req.params.id
        let productos = db.productos.findAll()
        let producto = db.productos.findByPk(id,{include:'categorias'})
        let puntaje = db.detalles.findAll({
            where:{
                id_producto:id
            }})
        if (req.session.sessionuser) {
            let hayopinion = db.detalles.findAll({
                where: {
                    id_producto:req.session.sessionuser.id
                }
            })

        }
        
       
        Promise.all([producto, productos, puntaje])
        .then(([producto, productos, puntaje, hayopinio])=>{
            let promedio=0
            let cantidad=0
            puntaje.forEach((element,index) => {
                promedio= promedio + element.puntaje
                cantidad=index
            });
            promedio= promedio / cantidad;
            let redondeado=Math.round(promedio)
             //return res.send(redondeado.toString())
            return res.render('detalle',{producto,productos,puntaje,promedio,redondeado})
        
            }
        )
        .catch(error => res.send(error))
        
        
    },
    carrito: (req,res)=>{
        let productos = db.productos.findAll()
        .then((productos)=>{
            return res.render('carrito',{
            productos
            });
        })

        
    },
    productos: (req, res) => {
        /*  let id = +req.params.id
         let productoEnCarrito = productos.find((producto) => producto.id === id) */
        db.productos.findAll({
            include: [{
                all: true
            }]
        })
            .then(productos => {
                /*  return res.send(productos) */
                return res.render('productos', {
                    productos,
                    toThousand
                })
            })
    },
    marcas: (req,res)=>{
        let id = +req.params.id
        let marca = db.marcas.findByPk(id)
        let producto = db.productos.findAll({
            where:{
                id_marcas:id
            }})
        Promise.all([producto, marca])

        .then(([producto,marca])=>{
            //return res.send(marca)
                return res.render('extraspaginas/marcas',{marca,producto})
        
            }
        )
       
        
    },
    puntaje:(req,res)=>{
        let id = +req.params.id
        let {estrella, comentario}=req.body

        db.detalles.create({
            puntaje: +estrella,
            comentarios:comentario,
            id_usuario:1,
            id_producto: id,

                
                    
           
        })
        return res.end()

        
    },
}