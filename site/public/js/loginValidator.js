window.onload = () =>{

    let $ = (tag) => document.querySelector(tag);
    let $$ = (tag) => document.querySelectorAll(tag);

    let email = $('#email');
    let pass = $('#pass');
    
    //Validaciones
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExpEmail = /^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //Email
    email.addEventListener('blur', (e) => {

        let value = e.target.value;

        switch (true) {
            case !value.trim():
                $('#errorEmail').innerHTML = "El email es requerido"
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
                $("#errorPass").innerHTML = "La constraseña es requerida"
                validationsErrors = true;
                break;

            default:
                $("#errorPass").innerHTML = ""
                validationsErrors = false;
                break;
        }
    })













}