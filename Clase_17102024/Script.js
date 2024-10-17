document.title = "Iniciar Sesion";

//Crear el contenedor principal para el formulario

const container = document.createElement("div");
container.style.margin = "20px";

//Crear titulo
const title = document.createElement("h2");
title.textContent = "Iniciar Sesion";
container.appendChild(title);

//crear el formulario
const form = document.createElement("form");

//crear campo de nombre de usuario
const usernamelabel = document.createElement("label");
usernamelabel.textContent = "Nombre de usuari@";

const usernameinput = document.createElement("input");
usernameinput.type = 'text';
usernameinput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameinput);

//crear campo de contraseña
const passwordlabel = document.createElement("label");
passwordlabel.textContent = "Contraseña";

const passwordinput = document.createElement("input");
passwordinput.type = "password";
passwordinput.required = true;
form.appendChild(passwordlabel);
form.appendChild(passwordinput);

//Crear boton de envio

const submitButton = document.createElement("button");
submitButton.textContent = "Iniciar Sesion";
form.appendChild(submitButton);

//Mensaje de respuesta
const message = document.createElement("p");
container.appendChild(form);
container.appendChild(message);

//Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//Datos de inicio de sesion predefinida
const validaUser = "juanito";
const validaPassword = "2589";

//Validar el user y el password
form.addEventListener("submit",(event) => {
    event.preventDefault();
    //Validar el nombre y contraseña
    if(usernameinput.value === validaUser && passwordinput.value === validaPassword){
        message.textContent = "¡Bienvenido!"; //Establece el mensaje de entrada
        message.style.color = "green"; //Cambia el color del mensaje
    }else{
        message.textContent = "Nombre de usuario o contraseña incorrecto";
        message.style.color = "red";
    }

    //Limpiar los input
    usernameinput.value = "";
    passwordinput.value = "";
});

