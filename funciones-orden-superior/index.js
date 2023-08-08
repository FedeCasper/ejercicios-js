console.log(beers);

/* (1) - Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas más alcohólicas */
function cervezasMasAlcoholicas (array){
     let copiaArrayFn2 = [...array]
     let arrayOrdenadoPorABV = copiaArrayFn2.sort((a,b) => a.abv - b.abv )
     let arrayDiezConMasAlcohol = arrayOrdenadoPorABV.slice(15, arrayOrdenadoPorABV.length)
     return arrayDiezConMasAlcohol
}
const arrayDiezConMasAlcohol = cervezasMasAlcoholicas(beers)
console.log("Diez cervezas con más graduación alcohólica: ", arrayDiezConMasAlcohol);


/* (2) - Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas menos amargas. */
function cervezasMenosAmargas( array ){
     let copiaArrayFn2 = [...array]
     let arrayOrdenadoPorIBU = copiaArrayFn2.filter(cerveza => cerveza.ibu).sort( (a,b) => a.ibu - b.ibu)
     let arrayDiezConMenosIBU = arrayOrdenadoPorIBU.slice(0,10)
     return arrayDiezConMenosIBU
}
const arrayDiezConMenosAmargor = cervezasMenosAmargas(beers)
console.log("Diez cervezas con menos amargor: ", arrayDiezConMenosAmargor);


/* (3) - Generar una función que reciba como parámetro el array de cervezas
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