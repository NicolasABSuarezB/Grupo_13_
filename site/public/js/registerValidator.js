window.onload = () => {

    let $ = (tag) => document.querySelector(tag);
    let $$ = (tag) => document.querySelectorAll(tag);

    let name = $('#name');
    let email = $('#email');
    let telefono = $('#telefono');
    let pass = $('#pass');
    let pass2 = $('#pass2');
    let avatar = $('#avatar');

    //Validaciones para los imput
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExpEmail = /^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/;
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;

    //Nombre
    name.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorName').innerHTML = "El nombre es obligatorio"
                validationsErrors = true;
                break;

            case !regExAlpha.test(value):
                $('#errorName').innerHTML = "El nombre NO debe contener datos numericos"
                validationsErrors = true;
                break;

            default:
                $('#errorName').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    //Email
    email.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorEmail').innerHTML = "El email es obligatorio"
                validationsErrors = true;
                break;

            case !regExpEmail.test(value):
                $('#errorEmail').innerHTML = "Debe ingresar un email valido"
                validationsErrors = true;
                break;

            default:
                $('#errorEmail').innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    //Telefono
    telefono.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorTelefono').innerHTML = "El Telefono es obligatorio"
                validationsErrors = true;
                break;

            default:
                $('#errorTelefono').innerHTML = ""
                validationsErrors = false
                break;
        }

    })

    //Pass
    pass.addEventListener("blur", (e) => {
        let value = e.target.value;
        switch (true) {
            case !value.trim():
                $("#errorPass").innerHTML = "La constraseña es requerida"
                validationsErrors = true;
                break;

            case !regExPass.test(password.value):
                $("#errorPass").innerHTML = "La contraseña debe tener entre 8 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                validationsErrors = true;
                break;

            default:
                $("#errorPass").innerHTML = ""
                validationsErrors = false;
                break;
        }
    })

    //Pass2
    pass2.addEventListener("blur", (e) => {
        let value = e.target.value;
        switch (true) {
            case !value.trim():
                $("#errorPass2").innerHTML = "Debe confirmar la contraseña"
                validationsErrors = true;
                break;

            case !regExPass.test(pass2.value):
                $("#errorPass2").innerHTML = "La contraseña debe tener entre 8 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                validationsErrors = true;
                break;

            case password.value != value:
                $("#errorPass2").innerHTML = `Las constraseñas no coinciden`
                validationsErrors = true;
                break;

            default:
                $("#errorPass2").innerHTML = ""
                validationsErrors = false
                break;
        }
    })

    //Avatar
    avatar.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(img.value):
                $('#errorAvatar').innerHTML = "Solo se permite ingresar una imagen valida fomato (jpg|jpeg|png|jfif|gif|webp)"
                validationsErrors = true;
                break;

            default:
                $('#errorAvatar').innerHTML = ""
                validationsErrors = false
                break;
        }
    })
}