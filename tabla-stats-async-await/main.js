async function getData(){
     let response = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
     let data = await response.json()
     return data
}

getData()
.then( data => {

     const eventos = data.events // array original
     const arrayFuturos = eventos.filter(evento => evento.estimate) // array futuro
     const arrayPasados = eventos.filter(evento => evento.assistance) // array pasado
     const catSinRep = Array.from(new Set(eventos.map(evento => evento.category))) // array categorias sin repetir

     // Función crea array con arrays de categorías ---------------------------------------------------------------
     function crearArrayArraysCategorias(array){
          return catSinRep.map( categoria =>  array.filter(evento => evento.category == categoria) )
          .filter(elemento => elemento.length)
     }
     const arrayDeArraysFuturos = crearArrayArraysCategorias(arrayFuturos) // array categorias futuras
     const arrayDeArraysPasados = crearArrayArraysCategorias(arrayPasados) // array categorias pasadas

     // Función MAP + REDUCE  ---------------------------------------------------------------
     function calcularDatosFinales(arrayArrays){
          let arrayMap = arrayArrays.map( array => {
               let objetoreduce = array.reduce( (acc, act) => { 
                    acc.cat = act.category
                    acc.rev += act.assistance ? act.price * act.assistance : act.price * act.estimate
                    acc.per += act.assistance ? ((act.assistance * 100) / act.capacity) / array.length : ((act.estimate * 100) / act.capacity) / array.length
                    return acc
                    } , {cat: "", rev: 0, per: 0} 
               ) 
               objetoreduce.rev = (objetoreduce.rev).toLocaleString()
               objetoreduce.per = parseFloat((objetoreduce.per).toFixed(2))
               return objetoreduce
          })
          arrayArrays[0][0].assistance ? console.log("Pasados", arrayMap) : console.log("Futuros", arrayMap)
     }
     calcularDatosFinales(arrayDeArraysFuturos)
     calcularDatosFinales(arrayDeArraysPasados)
})


