window.onload = () => {

    let $ = (tag) => document.querySelector(tag);
    let $$ = (tag) => document.querySelectorAll(tag);

    let email = $('#email');
    let pass = $('#pass');
    let eye = $('#eye-pass');


    //Validaciones
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExpEmail = /^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //Email
    email.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorEmail').innerHTML = "Debe ingresar su email"
                validationsErrors = true;
                break;

            case !regExpEmail.test(email.value):
                $('#errorEmail').innerHTML = "No es un email valido"
                validationsErrors = true;
                break;

            default:
                $('#errorEmail').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    //Pass
    pass.addEventListener("blur", (e) => {

        let value = e.target.value;

        switch (true) {

            case !value.trim():
                $("#errorPass").innerHTML = "Debe ingresar su contraseña"
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
}