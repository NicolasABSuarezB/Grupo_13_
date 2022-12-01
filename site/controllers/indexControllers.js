

const db = require("../database/models")


module.exports={
    home: (req,res)=>{
        let productos = db.productos.findAll()
        let marcas = db.marcas.findAll()
        Promise.all([productos, marcas])
        .then(([productos, marcas])=>{
            let ofertas=productos.filter(producto => producto.descuento !== "0")
           
             //return res.send(ofertas)
            return res.render("index",{productos,marcas,ofertas})
        
            }
        )
    
        
            
        
        
        
    }
}
