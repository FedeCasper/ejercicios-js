//Ejercicio N°1 & N°3
// ----------------------------------------------------------------------------
// let valorX = prompt("Ingrese un valor x")
// let valorY = prompt("Ingrese un valor y")

// console.log(valorX);
// console.log(valorY);

// if (valorX > valorY){
//      alert(`${valorX} es mayor que ${valorY}`)
// }else if(valorX < valorY){
//      alert(`${valorX} es menor que ${valorY}`)
// }else{
//      alert(`${valorX} es igual que ${valorY}`)
// }

//Ejercicio N°2
// ----------------------------------------------------------------------------
// let numA = prompt("Ingrese primer número")
// let numB = prompt("Ingrese segundo número")

// if(numA === numB){
//      console.log("Los números son iguales");
// } else {
//      console.log("Los números son diferentes");
// }

//Ejercicio N°4
// ----------------------------------------------------------------------------
// let numA = prompt("Ingrese primer número")
// let numB = prompt("Ingrese segundo número")
// let numC = prompt("Ingrese tercer número")

// if(numA < numB && numC > numB){
//      alert(`${numA} es el número más chico`);
// } else if((numB < numA && numC > numA)){
//      alert(`${numB} es el número más chico`);
// }else if((numC < numA && numC < numB)){
//      alert(`${numC} es el número más chico`);
// }

//Ejercicio N°5
// ----------------------------------------------------------------------------
// let personaX = {}
// personaX.nombre = prompt("Ingrese su NOMBRE")
// personaX.edad = prompt("Ingrese su EDAD")
// personaX.altura = prompt("Ingrese su ALTURA")
// let personaY = {}
// personaY.nombre = prompt("Ingrese su NOMBRE")
// personaY.edad = prompt("Ingrese su EDAD")
// personaY.altura = prompt("Ingrese su ALTURA")

// console.log(personaX);
// console.log(personaY);

//Solución 1
// if(personaX.edad > personaY.edad){
//      if(personaX.altura > personaY.altura){
//           console.log(`${personaX.nombre} es mayor y mide más que ${personaY.nombre}`);
//      }else{
//           console.log(`${personaX.nombre} es mayor y mide menos que ${personaY.nombre}`);
//      }
// }else if(personaX.edad < personaY.edad){
//      if(personaX.altura < personaY.altura){
//           console.log(`${personaX.nombre} es menor y mide menos que ${personaY.nombre}`);
//      }else{
//           console.log(`${personaX.nombre} es menor y mide más que ${personaY.nombre}`);
//      }
// }

//Solución 2
// if(personaX.edad > personaY.edad){
//      console.log(`${personaX.nombre} es mayor que ${personaY.nombre}`);
// }else{
//      console.log(`${personaX.nombre} es menor que ${personaY.nombre}`);
// }
// if(personaX.altura > personaY.altura){
//      console.log(`${personaX.nombre} mide más que ${personaY.nombre}`);
// }else{
//      console.log(`${personaX.nombre} mide menos que ${personaY.nombre}`);
// }

//Ejercicio N°6
// ----------------------------------------------------------------------------

// let nombre = prompt("Ingrese su NOMBRE")
// let edad = prompt("Ingrese su EDAD")
// let altura = prompt("Ingrese su ALTURA")
// let vision = prompt("Ingrese su VISION")

// if(edad < 18){
//      console.log("Sos menor de edad");
// }else if(altura < 150){
//      console.log("No cumples con la altura mínima");
// }else if(vision < 8){
//      console.log("Tu rango de visión es muy bajo");
// }else{
//      console.log("Su turno será la semana que viene");
// }

//Ejercicio N°7
// ----------------------------------------------------------------------------

//Solución 1
// let nombre = prompt("Ingrese su Nombre")
// let pase = prompt("Posee ud pase? (VIP/Normal)")
// let entrada = prompt("¿Posee ud entrada? (s/n)")

// if(nombre == "Fede" || pase == "VIP"){
//      console.log(`Bienvenido ${nombre} Ud tiene ingreso libre!`);
// }else if(entrada == "s"){
//      let usarEntrada = prompt("¿Quiere usar la entrada s/n?")
//      if(usarEntrada == "s"){
//           alert(`Bienvenido ${nombre}`)
//      }else{
//           alert(`Hasta luego ${nombre} te esperamos pronto`)
//      }
// }else{
//      let comprarEntrada = prompt("¿Desea comprar una entrada s/n?")
//      if(comprarEntrada == "s"){
//           let dineroDisponible = prompt("Ingrese el monto a pagar (min. $1000)")
//           if(dineroDisponible < 1000){
//                alert("El monto es insuficiente, intente nuevamente")
//           }else{
//                alert(`Bienvenido ${nombre}`)
//           }
//      }else{
//           alert(`Hasta luego ${nombre} te esperamos pronto`)
//      }
// }

// Solución 2
// let nombre = prompt("Ingrese su Nombre")
// if(nombre == "Fede"){
//      alert(`Bienvenido ${nombre} Ud tiene ingreso libre!`);
// }else{
//      let pase = prompt("Posee ud pase? (VIP/Normal)")
//      if(pase == "VIP"){
//           alert(`Bienvenido ${nombre} Ud tiene ingreso libre!`);
//      }else{
//           let entrada = prompt("¿Posee ud entrada? (s/n)")
//           if(entrada == "s"){
//                let usarEntrada = prompt("¿Quiere usar la entrada s/n?")
//                if(usarEntrada == "s"){
//                     alert(`Le damos la bienvenida ${nombre}!`)
//                }else{
//                     alert(`Hasta luego ${nombre} te esperamos pronto`)
//                }
//           }else{
//                let dineroDisponible = prompt("Para comprar la entrada ingrese el monto a pagar (min. $1000)")
//                if(dineroDisponible < 1000){
//                     alert("El monto es insuficiente, intente nuevamente")
//                }else{
//                     alert(`Su compra se realizó con éxito ${nombre}, bienvenido!`)
//                }
//           }
//      }
// }

//Ejercicio N°8
// ----------------------------------------------------------------------------

// Solucion 1
// let numeroIngresado = prompt("Adivine el número (Intento 1)")
// let numeroIncognita = 7
// switch (numeroIngresado){
//      case numeroIngresado:
//           if(numeroIngresado < 7){
//                alert("El numero incógnito es mayor ❌");
//           }else if(numeroIngresado > 7){
//                alert("El numero incógnito es menor ❌");
//           }else{
//                alert("ADIVINASTE ✅🎊🎉🎇🎈");
//           }
// }
// let numeroIngresado2 = prompt("Adivine el número (Intento 2)")
// switch (numeroIngresado2){
//      case numeroIngresado2:
//           if(numeroIngresado2 < 7){
//                alert("El numero incógnito es mayor ❌");
//           }else if(numeroIngresado2 > 7){
//                alert("El numero incógnito es menor ❌");
//           }else{
//                alert("ADIVINASTE ✅🎊🎉🎇🎈");
//           }
// }
// let numeroIngresado3 = prompt("Adivine el número (Intento 3)")
// switch (numeroIngresado3){
//      case numeroIngresado3:
//           if(numeroIngresado3 < 7){
//                alert("El numero incógnito es mayor ❌");
//           }else if(numeroIngresado3 > 7){
//                alert("El numero incógnito es menor ❌");
//           }else{
//                alert("ADIVINASTE ✅🎊🎉🎇🎈");
//           }
// }