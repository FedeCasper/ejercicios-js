console.log(beers);
/* (1) - Convertir la siguiente función nombrada en una función flecha: */
(mensaje) => console.log(mensaje);


/* (2) - Convertir la siguiente función nombrada en una función flecha: */
let multiplicacion = (numero1, numero2) => {
     let resultado = numero1 * numero2
     return resultado
}


/* (3) - Partiendo de un array const array = [ 1,2,3,4,5,6,7,8,9 ], aplicarle
un map a ese array y pasarle como argumento la función nombrada mostrada en
el ejemplo del punto 2. Mostrar por consola el nuevo array obtenido.*/
let array = [1,2,3,4,5,6,7,8,9]
let nuevoArray = array.map( multiplicacion )
console.log(nuevoArray);


/* (4) - Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas más alcohólicas */
function cervezasMasAlcoholicas (array){
     let copiaArrayFn4 = [...array]
     let arrayOrdenadoPorABV = copiaArrayFn4.sort((a,b) => a.abv - b.abv )
     let arrayDiezConMasAlcohol = arrayOrdenadoPorABV.slice(15, arrayOrdenadoPorABV.length)
     return arrayDiezConMasAlcohol
}
const arrayDiezConMasAlcohol = cervezasMasAlcoholicas(beers)
console.log("Diez cervezas con más graduación alcohólica: ", arrayDiezConMasAlcohol);


/* (5) - Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas menos amargas. */
function cervezasMenosAmargas( array ){
     let copiaArrayFn5 = [...array]
     let arrayOrdenadoPorIBU = copiaArrayFn5.filter(cerveza => cerveza.ibu).sort( (a,b) => a.ibu - b.ibu)
     let arrayDiezConMenosIBU = arrayOrdenadoPorIBU.slice(0,10)
     return arrayDiezConMenosIBU
}
const arrayDiezConMenosAmargor = cervezasMenosAmargas(beers)
console.log("Diez cervezas con menos amargor: ", arrayDiezConMenosAmargor);


/* (6) - Generar una función que reciba como parámetro un nombre de una cerveza
y devuelva el objeto completo que tenga ese nombre. */
function encontrarCerveza(array, nombre){
     let copiaArrayFn6 = [...array]
     let cervezaEncontrada = copiaArrayFn6.find( cerveza => cerveza.name === nombre )
     return cervezaEncontrada
}
let cervezaBuscada = encontrarCerveza(beers, "Fake Lager")
console.log(cervezaBuscada);


/* (7) - Generar una función que reciba como parámetro un array de cervezas, un
valor y que devuelva el primer objeto que su propiedad ibu sea igual al valor
ingresado, en caso de que no exista ninguna cerveza con ese ibu que muestre
por consola un mensaje que diga “No existe cerveza con un ibu de (valor ingresado)”. */
function encontrarCervezaPorAmargor(array, valor){
     let copiaArrayFn7 = [...array]
     let cervezaEncontrada = copiaArrayFn7.find(cerveza => cerveza.ibu === valor)
     if(cervezaEncontrada != undefined){
          return cervezaEncontrada
     }else{
          console.log(`No existe cerveza con un ibu de ${valor}`);
     }
}
let cervezaDeseada = encontrarCervezaPorAmargor(beers, 7)
console.log(cervezaDeseada);


/* (7) - Generar una función que reciba como parámetro un array de cervezas, un
valor y que devuelva el primer objeto que su propiedad ibu sea igual al valor
ingresado, en caso de que no exista ninguna cerveza con ese ibu que muestre
por consola un mensaje que diga “No existe cerveza con un ibu de (valor ingresado)”. */



/* (9) - Generar una función que reciba como parámetro el array de cervezas
y un valor de alcohol. La función debe devolver un nuevo array con las cervezas
que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto
que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)
. */
function evaluador (array, valor){
     const copiaArrayFn3 = [...array]
     const arrayFiltradoPorValor = copiaArrayFn3.filter(cerveza => cerveza.abv <= valor)
     const nuevoArray = arrayFiltradoPorValor.map(objeto => {
          return {
               abv: objeto.abv,
               amargor: objeto.ibu
          }
     })
     return nuevoArray.sort((a,b) => a.abv - b.abv)
}
const arraySegunValorAlcohol = evaluador(beers, 8)
console.log(arraySegunValorAlcohol);


/* (4) - Generar una función que reciba como parámetro el array de cervezas
y un valor de alcohol. La función debe devolver un nuevo array con las cervezas
que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto
que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)
. */
