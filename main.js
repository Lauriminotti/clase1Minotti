/* Pido un nombre mediante prompt y luego lo concateno con un mensaje de bienvenida*/

let nombreIngresado = prompt("Ingrese su nombre");
let bienvenidos = "¡Bienvenidos al sitio web,";
let blanco = " !";

let resultado= bienvenidos + nombreIngresado + blanco;

console.log(resultado);


/*Pido que ingresen su edad mediante prompt y luego le sumo otra edad para poder promediarlo y mediante la consola muestro el resultado*/
let edad =parseInt( prompt("Ingresá tu edad"));
let miEdad= 27;

let promedioEdad= (edad + miEdad) / 2;

console.log(promedioEdad);

/*Pido mediante prompt que ingresen su nombre, luego el apellido, los concateno y los muestro mediante un alert*/
let nombreUno = prompt("Ingrese su nombre");
let apellidoUno = prompt("Ingrese su apellido");
let espacio= " ";

let nombreyapellido = nombreUno + espacio + apellidoUno;

alert(nombreyapellido);
