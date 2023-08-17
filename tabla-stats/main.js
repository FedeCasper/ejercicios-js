//POSIBLES FORMAS DE SOLUCIONAR LAS TABLAS

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {

     let eventos = data.events // array original
     console.log("ARRAY ORIGINAL", eventos);
     const arrayFuturos = eventos.filter(evento => evento.estimate) // array futuro
     console.log("FUTUROS", arrayFuturos);
     const arrayPasados = eventos.filter(evento => evento.assistance) // array pasado
     console.log("PASADOS", arrayPasados);
     const catSinRep = Array.from(new Set(eventos.map(evento => evento.category))) // array categorias sin repetir
     console.log("CAT SIN REPETIR", catSinRep);

     // Función crea array con arrays de categorías ---------------------------------------------------------------
     function crearArrayArraysCategorias(array){
          let arraysCategories = catSinRep.map( categoria =>  array.filter(evento => evento.category == categoria) ).filter(elemento => elemento.length != 0)
          // console.log(arraysCategories);
          return arraysCategories
     }
     const arrayDeArraysFuturos = crearArrayArraysCategorias(arrayFuturos)
     const arrayDeArraysPasados = crearArrayArraysCategorias(arrayPasados)
     console.log("Array Arrays Futuro", arrayDeArraysFuturos);
     console.log("Array Arrays Pasado", arrayDeArraysPasados);

     // SOLUCION 1 - Función FOR OF + REDUCE ---------------------------------------------------------------
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

     // SOLUCION 2 - Función MAP + REDUCE  ---------------------------------------------------------------
     function calcularDatosFinales(arrayArrays){
          let x = arrayArrays.map( array => array.reduce( (acc, elementoActual) => { 
               acc.cat = elementoActual.category
               acc.rev += (elementoActual.assistance ? 
                    elementoActual.price * elementoActual.assistance :
                    elementoActual.price * elementoActual.estimate) 
               acc.per += (elementoActual.assistance ?
                    ((elementoActual.assistance * 100) / elementoActual.capacity) / array.length :
                    ((elementoActual.estimate * 100) / elementoActual.capacity)) / array.length
               return acc
               } , {cat: "", rev: 0, per: 0} ) 
          )
          console.log(x);
     }
     calcularDatosFinales(arrayDeArraysFuturos)

})