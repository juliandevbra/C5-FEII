//Window
console.log(window)

console.log(innerHeight, innerWidth)

console.log(outerHeight, outerWidth)

if(innerWidth > 768) {
    console.log('Estamos en una PC, notebook o SmartTV')
} else {
    console.log('Estamos en una tablet o en un movil')
}

window.onload = () => {
    console.log('Se cargó la página correctamente')
}

function navegar(){
    //open proviene de window
    open('https://playground.digitalhouse.com/course/352a7dce-1078-4e6c-8064-3132d92aae6e/units')
}

//document
console.log(document)

console.log(document.body)

//getElementById
const main = document.getElementById('root')
//Otra forma:
// const main = document.querySelector('#root')
console.log(main)

//getElementByClassName
// const encabezado = document.getElementsByClassName('encabezado')
// console.log(encabezado[0])

//querySelector
const encabezado = document.querySelector('.encabezado')
console.log(encabezado)

//Puedo llamar a cada elemento dentro mediante clases
const logo = document.querySelector('.encabezado .logo')
const nav = document.querySelector('.navegador')
console.log(logo)
console.log(nav)

//Obtiene el primer elemento que encuentra
const li = document.querySelector('ul li')
console.log(li)

//querySelectorAll
const arrLi = document.querySelectorAll('#clases li')
console.log(arrLi)

const arrArticles = document.querySelectorAll('article')
console.log(arrArticles)

// innerText
const navTitle = document.querySelectorAll('nav h4')
console.log(navTitle)

navTitle[0].innerText = 'Inicio'


// innerHTML
//Se borra todo
// main.innerHTML = '<h1>Todos los elementos anteriores han sido borrados</h1>'

//Se suma al final
main.innerHTML += '<h1>Yo me sumé a lo último</h1>'
// main.innerHTML = main.innerHTML + '<h1>Yo me sumé a lo último</h1>'

nav.style.display = 'flex'
nav.style.justifyContent = 'space-around'
navTitle[0].style.color = 'red'
navTitle[0].style.backgroundColor = 'grey'