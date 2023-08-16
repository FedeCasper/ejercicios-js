//POSIBLES FORMAS DE SOLUCIONAR LAS TABLAS

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {

     let eventos = data.events // array original
     console.log("ARRAY ORIGINAL", eventos);
     const arrayFuturos = eventos.filter(evento => evento.assistance) // array futuro
     console.log("FUTUROS", arrayFuturos);
     const arrayPasados = eventos.filter(evento => evento.estimate) // array pasado
     console.log("PASADOS", arrayPasados);
     const catSinRep = Array.from(new Set(eventos.map(evento => evento.category))) // array categorias sin repetir
     console.log("CAT SIN REPETIR", catSinRep);

     // Función crea array con arrays de categorías ---------------------------------------------------------------
     function crearArrayArraysCategorias(array){
          let arraysCategories = catSinRep.map(categoria =>  array.filter(evento => evento.category == categoria) )
          // console.log(arraysCategories);
          return arraysCategories
     }
     const arrayDeArrays = crearArrayArraysCategorias(arrayFuturos)
     // console.log(arrayDeArrays);

     // SOLUCION 1 - Función crea objeto con revenues percentage por categorías ---------------------------------------------------------------
     /*function calcularRevPerc(arrayArrays){
          let reduceResult;
          let arrayAux = []
          for(const array of arrayArrays){
               let categoria = ""
               let revenues = 0;
               let percentage = 0;
               reduceResult = array.reduce( (acc,elemAc) => {
                    categoria = elemAc.category
                    revenues += (elemAc.assistance ? elemAc.price * elemAc.assistance : elemAc.price * elemAc.estimate) 
                    percentage += (elemAc.assistance ? ((elemAc.assistance * 100) / elemAc.capacity)  : ((elemAc.estimate * 100) / elemAc.capacity))
     
                    return{
                         cat: categoria,
                         rev: revenues,
                         per: percentage / array.length
                    }
     
               } , { } )
               // console.log(reduceResult);
               arrayAux.push(reduceResult)
          }
          return arrayAux
     }
     let reduce = calcularRevPerc(arrayDeArrays)
     console.log("ARRAY OBJETOS CON DATOS FINALES", reduce);*/

     // SOLUCION 2 - Función crea objeto con revenues percentage por categorías ---------------------------------------------------------------
     function calcularDatosFinales(arrayArrays){
          let revenues = 0;
          let percentage = 0;
          let x = arrayArrays.map( array => array.reduce( (acc, elementoActual) => {
               revenues += (elementoActual.assistance ? elementoActual.price * elementoActual.assistance : elementoActual.price * elementoActual.estimate) 
               percentage += ( elementoActual.assistance ? ( (elementoActual.assistance * 100) / elementoActual.capacity) : ( (elementoActual.estimate * 100) / elemAc.capacity))
               acc = {
                    cat: elementoActual.category,
                    rev: revenues,
                    per: percentage
               }
               return acc
               } , 0 ) 
          )
          console.log(x);
     }
     calcularDatosFinales(arrayDeArrays)

})