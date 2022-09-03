const productos = require('../data/productos.json')

module.exports={
    detalle: (req,res)=>{
        id = +req.params.id
        let producto = productos.find((elemen)=>{
            return elemen.id==id;
        })
        return res.render('detalle',{producto, productos} );
        
    },
    carrito: (req,res)=>{
        return res.render('carrito',{
            productos
        });
    }
}