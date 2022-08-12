module.exports={
    
    edit: (req,res)=>{
        return res.render('editarProducto')
    },
    create: (req,res)=>{
        return res.render('crearProducto')
    },
    lista
    : (req,res)=>{
        return res.render('listaProducto')
    }
}