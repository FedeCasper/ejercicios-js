console.log("Funciones");

//Ejercicio N° 1
// ----------------------------------------------------------------------------

// function saludar(name){
//      console.log(`Hola ${name} como estás?`);
// }
// saludar("Casper")

//Ejercicio N° 2
// ----------------------------------------------------------------------------

// function multiplicar (x,y){
//      let resultado = (x*y)
//      console.log(`${x} x ${y} = ${x*y}`);
// }
// multiplicar(13,85)

//Ejercicio N° 3
// ----------------------------------------------------------------------------

// function suma (){
//      console.log(arguments);
// }
// suma(13,54,34)

// let resultado = 0
// function sumar (){
//      for(let i = 0 ; i < arguments.length ; i++ ){
//           resultado += arguments[i]
//           console.log(resultado); 
//      }
// }
// sumar(1,4,6,9,12)

//Ejercicio N° 4
// ----------------------------------------------------------------------------

// Solución 1
// let resultado = 0
// function resta (){
//      resultado = arguments[0]
//      for(let i = 1 ; i < arguments.length ; i++){
//           resultado -= arguments[i]
//           console.log(arguments[i]);
//      }
//      console.log(resultado);
// }
// resta(1120,3,4,55,48,6)

// Solución 2
// let resultado = 0
// let numeroRandom = Math.round(Math.random()*100)
// console.log(numeroRandom);
// let parametos = new Array(numeroRandom).fill("").map(e => Math.round(Math.random()*100))
// console.log(parametos);

// function resta (){
//      resultado = arguments[0]
//      for(let i = 1 ; i < arguments.length ; i++){
//           resultado -= arguments[i]
//           console.log(arguments[i]);
//      }
//      console.log(resultado);
// }
// resta(...parametos)


