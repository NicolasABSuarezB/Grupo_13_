window.onload = () => {

    let $ = (tag) => document.querySelector(tag);
    let $$ = (tag) => document.querySelectorAll(tag);

    let name = $('#name');
    let email = $('#email');
    let pass = $('#pass');
    let pass2 = $('#pass2');
    let eye = $('#eye-pass');
    let eye2 = $('#eye-pass2');

    // Validaciones para los input
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExpEmail = /^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/;
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;

    // Nombre
    name.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorName').innerHTML = "Este campo es obligatorio"
                validationsErrors = true;
                break;

            case !regExAlpha.test(value):
                $('#errorName').innerHTML = "El nombre NO debe contener datos numericos o especiales"
                validationsErrors = true;
                break;
            case value.length < 5:
                $("#errorName").innerHTML = "Debe haber por lo menos 5 caracteres"
                validationsErrors = true;
                break;

            default:
                $('#errorName').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Email
    email.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorEmail').innerHTML = "Este campo es obligatorio"
                validationsErrors = true;
                break;

            case !regExpEmail.test(value):
                $('#errorEmail').innerHTML = "Debe ingresar un email valido"
                validationsErrors = true;
                break;

            //Falta validar: EL EMAIL SE ENCUENTRA REGISTRADO

            default:
                $('#errorEmail').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Pass
    pass.addEventListener("blur", (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $("#errorPass").innerHTML = "Este campo es obligatorio"
                validationsErrors = true;
                break;

            case !regExPass.test(pass.value):
                $("#errorPass").innerHTML = "La contraseña debe tener entre 8 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                validationsErrors = true;
                break;

            case value.length < 8:
                $("#errorPass").innerHTML = 'Debe haber por lo menos 8 carcteres'
                validationsErrors = true;
                break;

            case value.length > 12:
                $("#errorPass").innerHTML = 'Maximo 12 carcteres'
                validationsErrors = true;
                break;


            default:
                $("#errorPass").innerHTML = ""
                validationsErrors = false;
                break;
        }
    })

    // Pass2
    pass2.addEventListener("blur", (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $("#errorPass2").innerHTML = "Debe confirmar la contraseña"
                validationsErrors = true;
                break;

            case !regExPass.test(pass.value):
                $("#errorPass").innerHTML = "La contraseña debe tener entre 8 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                validationsErrors = true;
                break;

            case value.length < 8:
                $("#errorPass2").innerHTML = 'Debe haber por lo menos 8 carcteres'
                validationsErrors = true;
                break;

            case value.length > 12:
                $("#errorPass2").innerHTML = 'Maximo 12 carcteres'
                validationsErrors = true;
                break;


            case pass2.value != pass.value:
                $("#errorPass2").innerHTML = "Las constraseñas no coinciden"
                validationsErrors = true;
                break;

            default:
                $("#errorPass2").innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    // Imagen
    image.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(image.value):
                $('#imagenContainer').innerHTML = "Solo se permite formatos: <br> (jpg|jpeg|png|jfif|gif|webp)"
                break;

            default:
                $('#imagenContainer').innerHTML = ""
                break;
        }

    })

    // Visualizador de clave
    eye.addEventListener('click', (e) => {
        pass.type === 'password' ? pass.type = 'text' : pass.type = 'password'
        if (eye.classList.contains('fa-eye-slash')) {
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        } else {
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }
    })

    // Visualizador de clave 2
    eye2.addEventListener('click', (e) => {
        pass2.type === 'password' ? pass2.type = 'text' : pass2.type = 'password'
        if (eye2.classList.contains('fa-eye-slash')) {
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        } else {
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
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