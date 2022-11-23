window.addEventListener('load', () => {

    /* Funciones para no declarar document */
    const $ = (tag) => document.querySelector(tag)
    const id = (tag) => document.getElementById(tag)

    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false
            /* btn.style.backgroundColor = 'var(--verde)' */
        }else{
            btn.disabled = true
            /* btn.style.backgroundColor = '#808080' */
        }
    }

    let titulo = $('#Titulo')
    let categoria = $('#Categoria')
    let precio = $('#Precio')
    let descuento = $('#Descuento')
    let stock = $('#Stock')
    let descripcion = $('#Descripcion')
    
    let img = $('#imagen')
    
    let btn = $('#btn-submit')
    
    const regNumberPositivos = /^[0-9]+/
    const regExLetter = /^[a-zA-Z\sñáéíóúü]*$/
    const regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    
    
    
    
    titulo.addEventListener('blur', function() {
        console.log(titulo )
        switch (true) {
            case !this.value.trim():
                $('#tituloError').innerHTML = "Debes ingresar el titulo de tu producto"
                this.classList.add('is-invalid')
                validate.titulo = false
                break;
            case !regExLetter.test(this.value.trim()):
                $('#tituloError').innerHTML = "Debe ingresar letras"
                this.classList.add('is-invalid')
                validate.titulo = false
                break;
            case !(this.value.trim().length > 4 && this.value.trim().length < 100):
                $('#tituloError').innerHTML = "El titulo del producto debe tener minimo 5 letras y 100 maximo"
                this.classList.add('is-invalid')
                validate.titulo = false
                break;
            default:
                $('#tituloError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.titulo = true
                break;
        }
        funcValidate(validate)
    })

    categoria.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#categoriaError').innerHTML = "Debes ingresar una categoria"
                this.classList.add('is-invalid')
                validate.categorias = false
                break;
            
            default:
                $('#categoriaError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.categorias = true
                break;
        }
        funcValidate(validate)
    })

    precio.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#precioError').innerHTML = "Debes ingresar un precio de tu producto"
                this.classList.add('is-invalid')
                validate.precio = false
                break;
            case !regNumberPositivos.test(this.value.trim()):
                $('#precioError').innerHTML = "Debe ingresar numeros positivos"
                this.classList.add('is-invalid')
                validate.titulo = false                    
                break;
            case !(this.value.trim().length >= 2 && this.value.trim().length <= 10):
                $('#precioError').innerHTML = "El precio del producto debe contener 2 caracteres y maximo 10"
                this.classList.add('is-invalid')
                validate.precio = false
                break;
            default:
                $('#precioError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.precio = true
                break;
        }
        funcValidate(validate)
    })

    descuento.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#descuentoError').innerHTML = "Este campo es obligatorio "
                this.classList.add('is-invalid')
                validate.descuento = false
                break;
            case !regNumberPositivos.test(this.value.trim()):
                $('#descuentoError').innerHTML = "Debe ingresar numeros positivos"
                this.classList.add('is-invalid')
                validate.descuento = false
                break;
            case !(this.value.trim().length <= 2 ):
                $('#descuentoError').innerHTML = "El descuento no debe ser mayor a 2 cifras"
                this.classList.add('is-invalid')
                validate.descuento = false
                break;
            case (this.value.trim() > 80 ):
                $('#descuentoError').innerHTML = "El descuento no puede ser mayor al 80%"
                this.classList.add('is-invalid')
                validate.descuento = false
                break;
            default:
                $('#descuentoError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.descuento = true
                break;
        }
        funcValidate(validate)
    })

    stock.addEventListener('blur', function() {
        switch (true) {
            case !this.value.trim():
                $('#stockError').innerHTML = "Debes ingresar una cantidad de productos"
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            case !regNumberPositivos.test(this.value.trim()):
                $('#stockError').innerHTML = "Debe ingresar numeros positivos"
                this.classList.add('is-invalid')
                validate.stock = false                    
                break;
            case !(this.value.trim() <= 1000):
                $('#stockError').innerHTML = "El stock maximo es 1000"
                this.classList.add('is-invalid')
                validate.stock = false
                break;
            default:
                $('#stockError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.stock = true
                break;
        }
        funcValidate(validate)
    })

    descripcion.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#descripcionError').innerHTML = "Debes ingresar una descripcion de tu producto"
                this.classList.add('is-invalid')
                validate.descripcion = false
                break;
            case !(this.value.trim().length >= 10 && this.value.trim().length <= 255):
                $('#descripcionError').innerHTML = "Debe contener minimo 10 caracteres  y maximo 255"
                this.classList.add('is-invalid')
                validate.descripcion = false
                break;
            default:
                $('#descripcionError').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.descripcion = true
                break;
        }
        funcValidate(validate)
    })

    img.addEventListener('change', function() {
        switch (true) {

            case !regExExt.exec(img.value):
                $('#imagenError').innerHTML = "Solo se permite ingresar una imagen con los siguientes fomatos (jpg|jpeg|png|jfif|gif|webp)"
                validate.img = false
                break;
            default:
                $('#imagenError').innerHTML = null
                validate.img = true
                break;
        }
        funcValidate(validate)
    })
    
    
    
    const validate = {
        titulo : false,
        precio : false,
        descuento : true ,
        stock : false ,
        categorias : false ,
        descripcion : false ,
        img : true 
    }
    
    funcValidate(validate)
})

