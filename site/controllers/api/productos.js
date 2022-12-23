
let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {


    productos: async (req, res) => {

      const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
         console.log(url)
        try {
         /* let dato = await db.productos.findAll()

            return res.send(dato)*/

          let {tipo} = req.query;


           /*for(let key in updateQuery) {
                
                if(key == 'tipo' ){

                    if(updateQuery[key] == null || updateQuery[key].trim().length == 0) {
                        delete updateQuery[key]
                    } else {
                        
                        if( key == 'tipo') {
                            updateQuery[key] = {[Op.substring]: req.query.nombre.trim()}
                        }
                    }

                } else {
                    delete updateQuery[key]
                    url.searchParams.delete(key)
                }
                //console.log(updateQuery)
            }
            console.log(updateQuery)*/
            /*   const getPagination = (page, size) => {

                const limit = size ? +size : 5
                const offset = page ? (page-1) * limit : 0

                return  {limit, offset}
            }

            const {limit, offset} = getPagination(page, size);

            //return res.send(data)


         getPageData = (data, page, limit) => {

               
                const { count, rows: result } = data;
                const pages = Math.ceil(count / limit);
                const currentPage = page ? +page : 1;

                if (currentPage > pages) {
                    throw new SyntaxError(); // (*)
                } else {
                    let next_page = ""
                    let previous_page = ""

                    if (url.searchParams.has('page') ) {
                        if(!url.searchParams.has('size')) {
                            url.searchParams.set('size', limit)
                        }
                        if (currentPage == 1) {

                            url.searchParams.set('page', (currentPage + 1))
                            next_page = url.href

                        } else {
                            
                            url.searchParams.set('page', (currentPage - 1))
                            previous_page = url.href
                            url.searchParams.set('page', (currentPage + 1))
                            next_page = url.href
                        }
                    } else {

                        url.searchParams.set('page', (currentPage + 1));
                        url.searchParams.set('size', limit)
                        next_page = url.href

                    }
                    const next = (currentPage == pages) ? null : next_page;
                    const previous = (currentPage == 1) ? null : previous_page;

                    return { count, pages, previous, next, result }
                }
            
            }*/
            // incluimos las relaciones con marca y categoria para poder visualizarlos en las tablas(unicamente nos traemos los nombres)
            let data =await db.productos.findAll()

           
        //    return res.send(data)
           if (tipo=='ofertas') {
            data= data.filter(word => word.descuento !== "0");
            return res.status(500).json(data)
           }else if (tipo=='novedades') {
            let fechahoy =new Date()
            let eliminar={updatedAt:fechahoy.toISOString()}
                agregarrecomiendo.forEach(fecha => {
                    
                    if(Date.parse(fecha.updatedAt)<= fechahoy.getTime()){
                        if(Date.parse(eliminar.updatedAt)>Date.parse(fecha.updatedAt)){
                            eliminar=fecha
                            console.log("exito",eliminar.id)
                        }
                      
                    }

                    
                })
            data= data.filter(word => word.descuento !== "0");
            return res.status(500).json(data)
           }
            return res.status(500).json(data)

        } catch (error) {
            return res.status(500).json({
                msg: 'Lo siento, ocurrio un error'
            })
        }
    }

}