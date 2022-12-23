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
            },include: [{
                all: true
            }]})
        let hayopinion=[{}]
        let agregarrecomiendo=null
        
        if (req.session.sessionuser) {
            hayopinion = db.detalles.findAll({
                where: {
                    id_producto: +id,
                    id_usuario:req.session.sessionuser.id

                }})
            agregarrecomiendo=db.recomendados.findAll({
                where:{
                    id_usuario:req.session.sessionuser.id
                }})
             
    
           

        }
        
       
        
        Promise.all([producto, productos, puntaje, hayopinion,agregarrecomiendo])
                .then(([producto, productos, puntaje, hayopinion,agregarrecomiendo]) => {
                    let promedio = 0
                    let cantidad = 0
                    puntaje.forEach((element, index) => {
                        promedio = promedio + element.puntaje
                        cantidad = index+1
                    });
                    promedio = promedio / cantidad;
                    let redondeado = Math.round(promedio)
                   
                    
                     if(hayopinion.toString() !== "[object SequelizeInstance:detalles]"){
                        hayopinion =hayopinion.toString()
                       
                    }
                    //return res.send(puntaje[0].usuario.foto)
                    
                    if (req.session.sessionuser) {
                      /*  let ver=  agregarrecomiendo.filter(ptp => ptp.id_producto ==2)
                        console.log(ver)
                        if(ver.length !==0){*/
                            if (agregarrecomiendo.length <=19) {
                                db.recomendados.create({
                                    id_usuario:req.session.sessionuser.id,
                                    id_producto:+id
                                })
                                
                            }
                        
                        else{
                        let fechahoy =new Date()
                        let eliminar={updatedAt:fechahoy.toISOString()}
                            agregarrecomiendo.forEach(fecha => {
                                
                                if(Date.parse(fecha.updatedAt)<= fechahoy.getTime()){
                                    if(Date.parse(eliminar.updatedAt)>Date.parse(fecha.updatedAt)){
                                        eliminar=fecha
                                       // console.log("exito",eliminar.id)
                                    }
                                  
                                }

                                
                            })
                            db.recomendados.update({
                                id_usuario:req.session.sessionuser.id,
                                id_producto:+id
                                
                            },
                            {
                                where:{id:eliminar.id}
                            })
            

                            

                        }
            
                    }
                  
                   // console.log(hayopinion)
                  // return res.send(hayopinion)
                    return res.render('detalle', { producto, productos, puntaje, promedio, redondeado, hayopinion })

                }
                )
                .catch(error => res.send(error))
            
        
    },
    carrito: (req,res)=>{
        db.productos.findAll()
        .then(productos=>{ 
            return res.render('carrito',{
            productos
            });
            /* return res.send(productos) */
        })
        .catch(error => res.send(error))

        
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
    especifico:(req,res)=>{
        let id = +req.params.id
        let producto = db.productos.findAll({
            where:{
                id_categoria:id
            }})
            Promise.all([producto])
            .then(([producto])=>{
                //return res.send(marca)
                    let ofertas= producto.filter(word => word.descuento !== "0")
                    if(ofertas.length ===0){
                            ofertas=null
                    }
                    return res.render('extraspaginas/mascota',{producto,ofertas})
            
                })

    },
    puntaje:(req,res)=>{
        let id = +req.params.id
        let {estrella, comentario}=req.body
        let hayopinion = db.detalles.findAll({
            where: {
                id_producto: +id,
                id_usuario:req.session.sessionuser.id
            }})
        .then((hayopinion)=>{
            if(hayopinion[0]!=null){

                db.detalles.update({
                    puntaje: +estrella,
                    comentarios: comentario,
                   
                },
                    {
                        where: {
                            id_producto: id,
                            id_usuario:req.session.sessionuser.id
    
                        }
                    })
                    return res.redirect('/detalle/'+id)
    
    
            }else{
                db.detalles.create({
                    puntaje: +estrella,
                    comentarios: comentario,
                    id_usuario: req.session.sessionuser.id,
                    id_producto: id,
    
    
                    
    
                })
                return res.redirect('/detalle/'+id)
            }

        })
        

        
        

        
    },
   
    
}