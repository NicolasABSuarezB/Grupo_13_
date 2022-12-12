

const db = require("../database/models")


module.exports={
    home: (req,res)=>{
        let productos = db.productos.findAll()
        let marcas = db.marcas.findAll()
        let agregarrecomiendo=null
        if (req.session.sessionuser) {
           
            agregarrecomiendo=db.recomendados.findAll({
                where:{
                    id_usuario:req.session.sessionuser.id
                },include: [{
                    all: true
                }]})
             
    
           

        }
        Promise.all([productos, marcas,agregarrecomiendo])
            .then(([productos, marcas, agregarrecomiendo]) => {
                let tipo1
                let ofertas = productos.filter(producto => producto.descuento !== "0")
                if (req.session.sessionuser && agregarrecomiendo.length>-1 ) {
                   
                     tipo1=[agregarrecomiendo.filter(ptp => ptp.productos.id_categoria == 1),
                        agregarrecomiendo.filter(ptp => ptp.productos.id_categoria == 2),
                        agregarrecomiendo.filter(ptp => ptp.productos.id_categoria == 3),
                        agregarrecomiendo.filter(ptp => ptp.productos.id_categoria == 4)]
                        //console.log(tipo1)
                        

                        tipo1.sort((a, b) => {
                            
                            if(a.length == b.length) {
                              return 0; 
                            }
                            if(a.length > b.length) {
                              return -1;
                            }
                            return 1;
                          });
                          
                        
                        
                        
                   let sacar = []
                    for (let index = 0; index < tipo1.length; ) {
                        if (tipo1[index][0] !=null) {
                            sacar.push(tipo1[index][0].productos.id_categoria)
                           
                        }
                       
                        
                        index++
                    }
                    
                    
                    
                    let pato=sacar.reduce((a, b) => a + b, 0)
                    if (pato !==10) {
                        
                        for (let index = 1; index < 5; index++) {
                            if (sacar.some(id=> id===index)===false) {
                                sacar.push(index)
                                console.log(index)
                            }
                            
                            
                            
                        }
                        
                        
                    
                    
                   
                    /*let ordenado = []
                    for (let index = 0; index < 4; index++) {
                        let voyasacra =Math.max(...sacar)
                        console.log(voyasacra)
                        ordenado.push(voyasacra)
                        sacar = sacar.filter(saco=> saco !== voyasacra)
                        tipo1=tipo1.filter(orden=> orden.length === voyasacra)

                    }*/
                    let pato2=[]
                    sacar.forEach((element, index) => {
                        productos.forEach(producto => {
                            
                            if (producto.id_categoria===element) {
                                pato2.push(producto)
                                console.log(pato2)
                            }
                        });
                        
                    }
                    
                    );
                    productos=pato2
                    
                }}
                
                //return res.send(sacar.toString())
                //console.log(agregarrecomiendo)
                //res.send(agregarrecomiendo.length)
                return res.render("index",{productos,marcas,ofertas})
                //return res.send(tipo1)
            }

            )
            
    }
}
