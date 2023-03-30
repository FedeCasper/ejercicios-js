console.log("Bucles");

//Ejercicio N°1
// ----------------------------------------------------------------------------
// let num = prompt("Ingrese un número para ver su tabla")

// for(let i = 1 ; i < 11 ; i++){
//      console.log(`${i} x ${num} = ${i*num}`);
// }

//Ejercicio N°2
// ----------------------------------------------------------------------------
// let num = ""
// let total = 0

// do{
     
//      num = prompt( "Ingrese para sumar (interrumpa con vacio)" )
//      if(num !== ""){
//           console.log(total = parseInt(total) + parseInt(num)) 
//           if(total > 99){
//                console.log("El juego solo llega hasta 99");
//                break
//           }
//      }else{
//           console.log("Fin") 
//      }
// }while(num != "")

// console.log(total);
// console.log("se cortó");

//Ejercicio N° 3
// ----------------------------------------------------------------------------
// let numeroIngresado = ""
// numeroIngresado = prompt(`Ingrese un número`)

//      while(total != numeroIngresado){
//           if(numeroIngresado < total){
//                numeroIngresado = prompt(`El número oculto es mayor a ${numeroIngresado} ❌`)
//           }else if(numeroIngresado > total){
//                numeroIngresado = prompt(`El número oculto es menor a ${numeroIngresado} ❌`)
//           }
               
//      }
// alert("adivinaste ✅")

//Ejercicio N° 4
// ----------------------------------------------------------------------------

//Solución 1
//let num = prompt("Ingrese un número")

// while((num%2) == 0 || (num%3) == 0 || (num%5) == 0 || (num%7) == 0){
     
//      console.log(`${(num%2)} es el resto dividido 2`);
//      console.log(`${(num%3)} es el resto dividido 3`);
//      console.log(`${(num%5)} es el resto dividido 5`);
//      console.log(`${(num%7)} es el resto dividido 7`);
//      console.log((num%2) == 0 || (num%3) == 0 || (num%5) == 0 || (num%7) == 0);
//      num = prompt("el numero no es primo ingrese otro")
// }
// console.log(`${(num%2)} es el resto dividido 2`);
// console.log(`${(num%3)} es el resto dividido 3`);
// console.log(`${(num%5)} es el resto dividido 5`);
// console.log(`${(num%7)} es el resto dividido 7`);
// console.log((num%2) == 0 || (num%3) == 0 || (num%5) == 0 || (num%7) == 0);
// alert(`El número ${num} es primo!`)

//Solución 2
//let num = prompt("Ingrese un número")

// for(let i = 2 ; i < num ; i++){
//      console.log(num%i);
//      if(num%i == 0){
//           console.log(`${num} % ${i} == ${num%i}`);
//           console.log("No es primo");
//           break
//      }else{
//           console.log(`${num} % ${i} == ${num%i}`);
//      }
// }
// alert("Es número primo")

//Ejercicio N° 5
// ----------------------------------------------------------------------------

// let num = prompt("Ingrese un número para saber sus divisores")
// let aux = [] 

// for(let i = 1 ; i < num ; i ++){
// if(num%i == 0){
//      aux.push(i)
//      }
// }
// console.log(aux);

//Ejercicio N° 6
// ----------------------------------------------------------------------------

