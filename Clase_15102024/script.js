// Definicion de una funcion

/*
function hello(){
    console.log("Hola Clase");
    console.log(" 5IV7");
}

// Llamada a la funcion
hello();
hello();
hello();
hello();
hello();
*/

/*
// Retorno de la funcion
function hello(){
    return "Hola Clase";
}

const result = hello()
console.log(result);
*/


/*
// Funcion que retorna otra funcion

function hello(){
    return function (){
        return "Hola soy la funcion 2";
    }
}

console.log(hello()())
*/

/*
//Funcion con parametros
function add(x){
    console.log(x);
}

add(5)
*/

/*
//Funcion con multiples parametros 
function add(x,y){
    console.log(x+y);
}

add(5,10)
*/

/*
//Control de error en multiples parametros 1
function add(x,y=0){
    console.log(x+y);
}

add(5,)
*/

/*
//Control de error en multiples parametros 2
function add(x,y){
    if (y===undefined){
        y=0;
    }
    console.log(x+y);
}

add(5,undefined)
*/


/*
//Parametro de tipo cadena
function add(name){
    console.log("Hola " +name);
}

add("Clase JS")
*/


//Objetos
const user = {
    nombre:"Alvarado",
    apellidoP:"Reyes",
    apellidoM:"Quiroz",
    edad:91,
    direccion :{
        calle:"Nicolas Bravo",
        no:598,
        colonia:"Narvarte",
        delegacion:"Los Pinos"
    },
    amigos: ["Raul","Maria"],
    activo: false
}

//Consola nombre apellidoP apellidoM
//alert activo;
//Consola edad
//alert calle no colonia delegacion
//consola amigos

function datos(user) {
    console.log(user.nombre + " " + user.apellidoP + " " + user.apellidoM);
}
datos(user);


if (user.activo){
    alert("El usuario esta activo");
} else{
    alert("El usuario esta inactivo");
}

function edad(user){
    console.log(user.edad + " años");
}
edad(user);

function direccion(user){
    alert(user.direccion.calle + " " + user.direccion.no + " " + user.direccion.colonia + " " + user.direccion.delegacion);
}

direccion(user);

function amigos(user){
    console.log(user.amigos);
}

amigos(user);
