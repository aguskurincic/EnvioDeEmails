// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// Event Listeners

eventListeners();

function eventListeners() {
    //Inicio
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del form
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Botón enviar en submit
    formEnviar.addEventListener('submit', enviarEmail);

    //Botón reset
    resetBtn.addEventListener('click', resetForm);
}

// Funciones

function inicioApp() {
    //Deshabilitar envio
    btnEnviar.disabled = true;
}

//Valida el contenido del campo
function validarCampo() {
    
    //Valida longitud del texto
    validarLongitud(this);

    //Validar email
    if(this.type === 'email') {
        validarEmail(this);
    }

    //Habilitar botón
    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

//Resetear form
function resetForm(e) {
    formEnviar.reset();
    e.preventDefault();
}

//Envio de correo
function enviarEmail(e) {

    //Spinner al presionar botón
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif envio de email
    const enviado = document.createElement('img');
    enviado.src= 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner, mostrar enviado
    setTimeout(function() {     //Fijar tiempo para ejecutar funciones
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formEnviar.reset();
        }, 5000);
    }, 3000);

    e.preventDefault();
}

//erifica longitud de texto en campos
function validarLongitud(campo) {
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');        
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');        
    }
}