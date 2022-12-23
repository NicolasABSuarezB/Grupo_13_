window.onload = function () {


    console.log('Hola!')
    let url = new URL(`http://localhost:3030/api/productos?tipo=ofertas`);
    const ofertas = document.querySelector('#botonofertas')
    const novedades = document.querySelector('#botonovedades')
    const fragment = document.createDocumentFragment(); 
    const template = document.querySelector('#tempale').content;
var element = document.getElementsByClassName("glider-contain");

        

    //console.log(categoria)
   
   

    // Función 'traerDatos' recibe una url por parametro
    // Se encarga de hacer la petición a la API y dependiendo de los resultados pinta en el DOM los resultados
    function eliminar(){
        
        for (let index = 0; index < 2; ) {
            
        console.log(element[index].firstChild)
            element[index].removeChild(element[index].firstChild);
            index++

                
            }
    }
    const traerDatos = async (url) => {
        try {
            
            // petición por fetch a la API
            let response = await fetch(url)
            let result = await response.json();
            
           
         
                console.log('Tus resultados')
                console.log(result)
                
        
                result.forEach(producto  => {
                    template.querySelector('#imagen').setAttribute("src","/img/imgproducto/"+producto.imagen)
                   
                    
                    const clone = template.cloneNode(true);
                    fragment.appendChild(clone)
                
                })
                console.log(fragment)
                element[1].appendChild(fragment);
                glider-refresh()
       
               
        
            //console.log(result) 
            // en caso de que haya resultados coincidentes con la consulta, ingresamos al bloque del IF
           /*if(result.count > 0) {
                console.log('Tus resultados')
                console.log(result.result)
                

                result.result.forEach(producto  => {
                    
                  
                   /* template.querySelector('#marca').textContent = 'producto.marca.nombre';
                    template.querySelector('#categoria').textContent = 'producto.category.nombre';*/
                 /*   template.querySelector('#imagen').setAttribute("src","/img/imgproducto/"+producto.imagen)
                    template.querySelector('#nombre').textContent = producto.titulo
                    template.querySelector('#stock').textContent = producto.stock
                    template.querySelector('#precio').textContent = producto.precio
                    template.querySelector('#descuento').textContent = producto.descuento
                    template.querySelector('#btn-edit').href = `/admin/edit/${producto.id}`
                    template.querySelector('#btn-delete').action = `/admin/destruir/${producto.id}?_method=DELETE` ;

                    const clone = template.cloneNode(true);
                    fragment.appendChild(clone)
                });

                console.log(fragment)
                tbody.appendChild(fragment);
                
                ulPages.innerHTML = ""

                if(result.previous != null ) {
                    ulPages.innerHTML += `<li class="page-item"><a class="page-link" href="${result.previous}" >Previous</a></li>`
                } else {
                    ulPages.innerHTML += `<li class="page-item disabled"><a class="page-link" href="">Previous</a></li>`
                }

                if(result.pages > 2) {
                    for (let i = 1; i < result.pages + 1; i++) {
                       
                        let link = new URL(url)
                        if(link.searchParams.get('page') == i) {
                            link.searchParams.set('page', i)
                            ulPages.innerHTML += `<li class="page-item disabled"><a class="page-link" href="${link.href}">${i}</a></li>`
                        } else {
                            link.searchParams.set('page', i)
                            ulPages.innerHTML += `<li class="page-item"><a class="page-link" href="${link.href}">${i}</a></li>`
                        }
                        
                    }
                }


                if (result.next != null) {
                    ulPages.innerHTML += `<li class="page-item"><a class="page-link" href="${result.next}">Next</a></li>`
                } else {
                    ulPages.innerHTML += `<li class="page-item disabled"><a class="page-link" href="">Next</a></li>`
                }

            // En caso de que no haya resultados, deberiamos enviar un msj al usuario informandolo
            } else {

            }*/

        } catch (error) {
            console.log(error)
        }
    }
    ofertas.addEventListener('click', (e) => {
        eliminar()
        eliminar()
        traerDatos(url.href)
       
    })
    novedades.addEventListener('click', (e) => {
        traerDatos(url.href)
      
    })


}