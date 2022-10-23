var nombre = documet.getElementById('nombre');
var apellido = document.getElementById('apellido');
var mail = document.getElementById('mail');

var error = document.getElementById('error');
error.style.color = 'red';


function enviarFormulario(){
    console.log("Enviando formulario...")

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push('Ingrese su nombre');
    }

    if(apellido.value === null || apellido.value === ""){
        mensajesError.push('Ingrese su apellido');
    }

    if(mail.value === null || mail.value === ""){
        mensajesError.push('Ingrese su mail');
    }

    error.innerHTML = mensajesError.join(', ');


    return false;
}