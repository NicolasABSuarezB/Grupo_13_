const db = require("../database/models")
/* let products = require("../data/products.json") */;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports={
    detalle: (req,res)=>{
        id = +req.params.id
        let productos = db.productos.findAll()
        let producto = db.productos.findByPk(id,{include:'categorias'})
        Promise.all([producto, productos])
        .then(([producto, productos])=>{
            //res.send(producto)
            return res.render('detalle',{producto,productos})
        
            }
        )
        .catch(error => res.send(error))
        
        
    },
    carrito: (req,res)=>{
        return res.render('carrito',{
            productos
        });
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
    }
}