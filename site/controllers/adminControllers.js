module.exports={
    
    edit: (req,res)=>{
        return res.render('admin/editarProducto')
    },
    create: (req,res)=>{
        return res.render('admin7crearProducto')
    },
    lista
    : (req,res)=>{
        return res.render('admin7listaProducto')
    }
}