

const db = require("../database/models")


module.exports={
    home: (req,res)=>{
        let productos = db.productos.findAll()
        .then((productos)=>{
            //res.send(productos.imagen)
            return res.render("index",{productos})
        
            }
        )
        
            
        
        
        
    }
}
