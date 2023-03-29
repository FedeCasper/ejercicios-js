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

// Solución 2
// let numeroIngresado1 = prompt("Adivine el número entre 1 y 10(Intento 1)")
// if(numeroIngresado1 < 7){
//      alert("El numero incógnito es mayor ❌");
// }else if(numeroIngresado1 > 7){
//      alert("El numero incógnito es menor ❌");
// }else if(numeroIngresado1 == 7){
//      alert("ADIVINASTE ✅🎊🎉🎇🎈");
// }else{
//      alert("El dato ingresado no es correcto ❌");
// }
// let numeroIngresado2 = prompt("Adivine el número entre 1 y 10(Intento 2)")
// if(numeroIngresado2 < 7){
//      alert("El numero incógnito es mayor ❌");
// }else if(numeroIngresado2 > 7){
//      alert("El numero incógnito es menor ❌");
// }else if(numeroIngresado2 == 7){
//      alert("ADIVINASTE ✅🎊🎉🎇🎈");
// }else{
//      alert("El dato ingresado no es correcto ❌");
// }
// let numeroIngresado3 = prompt("Adivine el número entre 1 y 10(Intento 3)")
// if(numeroIngresado3 < 7){
//      alert("El numero incógnito es mayor ❌");
// }else if(numeroIngresado3 > 7){
//      alert("El numero incógnito es menor ❌");
// }else if(numeroIngresado3 == 7){
//      alert("ADIVINASTE ✅🎊🎉🎇🎈");
// }else{
//      alert("El dato ingresado no es correcto ❌");
// }

//Ejercicio N°9
// ----------------------------------------------------------------------------

// let edadIngresada = prompt("Ingrese su EDAD")

// switch(edadIngresada){
// case edadIngresada:
//      if(edadIngresada > 0 && edadIngresada <= 12){
//           alert("Eres un Infante");
//      }
// case edadIngresada:
//      if(edadIngresada > 12 && edadIngresada <=18){
//           alert("Eres un adolescente");
//      }
// case edadIngresada:
//      if(edadIngresada > 18 && edadIngresada <= 45 ){
//           alert("Eres un adulto");
//      }
// case edadIngresada:
//      if(edadIngresada > 45 && edadIngresada < 100){
//           alert("Eres un anciano");
//      }     
// case edadIngresada:
//      if(edadIngresada >= 100){
//           alert("¿Seguro tienes esa edad?");
//      }  
// }

//Ejercicio N°10
// ----------------------------------------------------------------------------

// Solución 1
// let eleccionPersonajeX = prompt("Pierda/Papel/Tijera")
// let eleccionPersonajeY = prompt("Pierda/Papel/Tijera")

// switch(eleccionPersonajeX){
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Piedra" && eleccionPersonajeY == "Tijera")
//           alert("Gana personaje1");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Piedra" && eleccionPersonajeY == "Papel")
//           alert("Gana personaje2");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Piedra" && eleccionPersonajeY == "Piedra")
//           alert("Empate");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Tijera" && eleccionPersonajeY == "Papel")
//           alert("Gana personaje1");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Tijera" && eleccionPersonajeY == "Piedra")
//           alert("Gana personaje2");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Tijera" && eleccionPersonajeY == "Tijera")
//           alert("Empate");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Papel" && eleccionPersonajeY == "Piedra")
//           alert("Gana personaje1");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Papel" && eleccionPersonajeY == "Tijera")
//           alert("Gana personaje2");
//      case eleccionPersonajeX:
//           if(eleccionPersonajeX == "Papel" && eleccionPersonajeY == "Papel")
//           alert("Empate");
// }


// Solución 2
// let eleccionPersonajeX = prompt("PERSONAJE 1 escoje: Pierda/Papel/Tijera")
// let eleccionPersonajeY = prompt("PERSONAJE 2 escoje: Pierda/Papel/Tijera")

// switch(eleccionPersonajeX){
//      case eleccionPersonajeX:
//           if((eleccionPersonajeX == "Piedra" && eleccionPersonajeY == "Tijera") 
//           || (eleccionPersonajeX == "Tijera" && eleccionPersonajeY == "Papel") 
//           || (eleccionPersonajeX == "Papel" && eleccionPersonajeY == "Piedra"))
//           alert("Gana PERSONAJE 1");
//      case eleccionPersonajeX:
//           if((eleccionPersonajeX == "Piedra" && eleccionPersonajeY == "Papel") 
//           || (eleccionPersonajeX == "Tijera" && eleccionPersonajeY == "Piedra") 
//           || (eleccionPersonajeX == "Papel" && eleccionPersonajeY == "Tijera"))
//           alert("Gana PERSONAJE 2");
//      case eleccionPersonajeX:
//           if((eleccionPersonajeX == "Piedra" && eleccionPersonajeY == "Piedra") 
//           || (eleccionPersonajeX == "Tijera" && eleccionPersonajeY == "Tijera") 
//           || (eleccionPersonajeX == "Papel" && eleccionPersonajeY == "Papel"))
//           alert("Empate");
// }

//Ejercicio N°11
// ----------------------------------------------------------------------------

// let color = prompt("Elija un color (Verde | Blanco Negro | Azul | Amarillo | Rojo | Marrón")

// switch (color){
//      case color:
//           if(color == "Blanco"){
//                alert("Falta de color")
//           }else if(color == "Negro"){
//                alert("Falta de color")
//           }
//           break;
//      case "Verde":
//           alert("El color de la esperanza")
//           break;
//      case "Azul":
//           alert("El color del agua")
//           break;
//      case "Amarillo":
//           alert("El color del sol")
//           break;
//      case "Rojo":
//           alert("El color del fuego y de la sangre")
//           break;
//      case "Marron":
//           alert("El color de la tierra")
//           break;
//      default:
//           alert("Excelente elección no lo teníamos pensado")
//           break;
// }

//Ejercicio N°12
// ----------------------------------------------------------------------------

// let numX = prompt("Ingrese un número X")
// let numY = prompt("Ingrese un número Y")
// let operador = prompt("Ingrese la operacion ( + - / x )")

// switch (operador) {
//      case "+":
//           let suma = (parseInt(numX) + parseInt(numY))
//           alert(`${numX} + ${numY} = ${suma}`)
//           break
//      case "-":
//           let resta = (parseInt(numX) - parseInt(numY))
//           alert(`${numX} - ${numY} = ${resta}`)
//           break
//      case "/":
//           let division = (parseInt(numX) / parseInt(numY))
//           if(division == Infinity){
//                alert("No se puede dividir por 0")
//           }else{
//                alert(`${numX} / ${numY} = ${division}`)
//           }
//           break
//      case "x":
//           let multiplicacion = (parseInt(numX) * parseInt(numY))
//           alert(`${numX} x ${numY} = ${multiplicacion}`)
//           break
// }

//Ejercicio N°13
// ----------------------------------------------------------------------------