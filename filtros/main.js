const $contenedorChecks = document.getElementById('contenedorChecks')
const $containerCards = document.getElementById('contenedorCards')
const $search = document.querySelector('input[type="search"]')

const catSinRepetir = [...new Set(arrayObjetos.map(objeto => objeto.modulo))];

// Funcion que crea la estructura del check
function crearEstructuraCheck(string) {
     return `
     <label class="me-2">
          <input type="checkbox" class="me-2" name="frutas" value="${string}">${string}
     </label>
     `
}

// Función que imprime los checks en el HMTL
function imprimirChecksEnHTML(array, elementoHTML) {
          elementoHTML.innerHTML += array.reduce((acc, elemAct) => acc += crearEstructuraCheck(elemAct), "")
}
imprimirChecksEnHTML(catSinRepetir, $contenedorChecks)

// Declaro mi función para crear estructuras de cards
function crearEstructuraCard(objeto) {
     return `
     <div class="card" style="width: 18rem;">
          <img src="${objeto.imagen}" class="card-img-top" alt="..." style="height: 15rem; object-fit: cover;">
          <div class="card-body">
               <h5 class="card-title">${objeto.mascotas}</h5>
               <h6 class="card-title" style="color:blueviolet;">Dueño: ${objeto.nombre} (${objeto.modulo})</h6>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="./detalles.html?nombre=${objeto.nombre}" class="btn btn-primary">Detalles</a>
               </div>
     </div>
     `
}

// Declaro mi función para imprimir cards
function imprimirCardsEnHTML(array, elementoHTML) {
     array.length ?
          elementoHTML.innerHTML = array.reduce((acc, elemActual) => acc += crearEstructuraCard(elemActual), "") :
          elementoHTML.innerHTML = `<h3 style="color:blueviolet;">Oops! No se encontró nada</h3>`
}
imprimirCardsEnHTML(arrayObjetos, $containerCards)

// Escuhador de Eventos: SEARCH
$search.addEventListener( "keyup", ()=>{
     const returnCruzado = filtroCruzado(arrayObjetos, $search)
     imprimirCardsEnHTML(returnCruzado,$containerCards)
} )

// Escuhador de Eventos: CHECKS
$contenedorChecks.addEventListener("change", () => {
     const returnCruzado = filtroCruzado(arrayObjetos, $search)
     imprimirCardsEnHTML(returnCruzado, $containerCards)
})

// Fn de filtro search
function filtroPorSearch(array, input){
     return array.filter( objeto => objeto.nombre.toLowerCase().includes(input.value.toLowerCase()))
}

// Fn de filtro check
function filtroPorCheck(array){
     let arrayValues = [...document.querySelectorAll("input[type='checkbox']:checked")].map(check => check.value)
     return arrayValues.length ? array.filter(objeto => arrayValues.includes(objeto.modulo)) : arrayObjetos
}

// Combinar los filtros
function filtroCruzado(array, input){
     const arrayFiltradoCheck = filtroPorCheck(array)
     return filtroPorSearch(arrayFiltradoCheck, input)
}