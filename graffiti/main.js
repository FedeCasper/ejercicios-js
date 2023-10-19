const divWall = document.getElementById('wall')
const btnEnviar = document.querySelector('button')
const inputText = document.querySelector('input[type="text"]')
const inputColor = document.querySelector('input[type="color"]')


function crearDiv (e, refHTMLwall, refHTMLinputText, refHTMLinputColor ){
     e.preventDefault();
     const inputRadio = document.querySelectorAll('input[type="radio"]:checked')
     if(refHTMLinputText.value != ""){
          let div = document.createElement('div')

          let span = document.createElement('span')
          span.textContent = "X"
          span.classList.add('font-extrabold', 'absolute', 'top-4', 'right-5')

          span.addEventListener('click', () => refHTMLwall.removeChild(div) )

          inputRadio[0].value == "graffiti" ? 
          div.classList.add('w-[200px]', 'h-[200px]', 'rounded-md', 'italic', 'p-4', 'relative') :
          div.classList.add('w-[200px]', 'h-[200px]', 'rounded-md', 'p-4', 'relative')

          div.style.background = refHTMLinputColor.value
          div.innerText = refHTMLinputText.value

          div.appendChild(span)
          refHTMLwall.appendChild(div)
     }else{
          alert("Hay campos vacíos sin completar")
     }

}

btnEnviar.addEventListener('click', (e) => crearDiv(e, divWall, inputText, inputColor))