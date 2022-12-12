window.onload = () => {

    let $ = (tag) => document.querySelector(tag);
    let $$ = (tag) => document.querySelectorAll(tag);

    let name = $('#name');
    let apellido = $('#apellido');
    let genero = $('#genero');
    let pais = $('#pais');
    let provincia = $('provincia')
    let direccion = $('#direccion');
    let codigopostal = $('#codigopostal');
    let telefono = $('#numero');

    // Validaciones para los imput
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExpEmail = /^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/;
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;

    // Nombre
    name.addEventListener('blur', (e) => {
        let value = e.target.value;
        switch (true) {
            case !value.trim():
                $('#errorName').innerHTML = "El nombre es obligatorio"
                validationsErrors = true;
                break;

            case value.length < 5:
                $("#errorName").innerHTML = "Debe haber por lo menos 5 caracteres"
                validationsErrors = true;
                break;

            case !regExAlpha.test(value):
                $('#errorName').innerHTML = "El nombre no debe contener datos numéricos ni especiales"
                validationsErrors = true;
                break;

            default:
                $('#errorName').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Apellido
    apellido.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorApellido').innerHTML = "El apellido es obligatorio"
                validationsErrors = true;
                break;

            case value.length < 5:
                $("#errorApellido").innerHTML = "Debe haber por lo menos 5 caracteres"
                validationsErrors = true;
                break;

            case !regExAlpha.test(value):
                $('#errorApellido').innerHTML = "El apellido no debe contener datos numéricos ni especiales"
                validationsErrors = true;
                break;

            default:
                $('#errorApellido').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Genero
    // Pais
    // Provincia

    // Direccion
    direccion.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorDireccion').innerHTML = "La dirección es obligatoria"
                validationsErrors = true;
                break;

            default:
                $('#errorDireccion').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Codigo Postal
    codigopostal.addEventListener('blur', (e) => {

        let value = e.target.value;
        switch (true) {
            case !value.trim():
                $('#errorCodigopostal').innerHTML = "El código postal es obligatorio"
                validationsErrors = true;
                break;

            default:
                $('#errorCodigopostal').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Telefono
    telefono.addEventListener('blur', (e) => {

        let value = e.target.value;
        switch (true) {
            case !value.trim():
                $('#errorNumero').innerHTML = "El número telefónico es obligatorio"
                validationsErrors = true;
                break;

            default:
                $('#errorNumero').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Formulario
    form.addEventListener('submit', (e) => {

        e.preventDefault();

        console.log(form.elements);
        if (errores.length > 0) {
            form.submit()
        }
    })
}