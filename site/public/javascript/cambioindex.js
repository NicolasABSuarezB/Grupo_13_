function cambio(){
    let pato= document.getElementById('botonofertas').className;
            
            if (pato=='seleccionado') {
                document.getElementById('botonofertas').classList.toggle('selecionado')
                document.getElementById('botonovedades').classList.add('selecionado')
                document.getElementById('botonovedades').style.color="#187498"
                document.getElementById('botonofertas').style.color="black"
            } else {
                document.getElementById('botonovedades').classList.toggle('selecionado')
                document.getElementById('botonofertas').classList.add('selecionado')
                document.getElementById('botonovedades').style.color="black"
                document.getElementById('botonofertas').style.color="#187498"
            }
            
        };
        