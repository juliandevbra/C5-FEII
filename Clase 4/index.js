// innerText
const innersExample = document.getElementById('inners')
console.log(innersExample)

const h3 = innersExample.querySelector('h3')
console.log(h3)

h3.innerText = 'Esto lo modifiqué con innerText'

//innerHTML
innersExample.innerHTML += '<h1>Esto lo creé con innerHTML</h1>'


//Template string
const titulo = 'Esto es el titulo hecho con template string'
const descripcion = 'Esto es una descripción hecha con template string'

const nuevoContenido = `
    <h3>${titulo}</h3>
    <h4>${descripcion}</h4>
`
const tempStringsExample = document.getElementById('tempStrings')

tempStringsExample.innerHTML += nuevoContenido

//Ejemplo de función para generar articulos e inyectarlos en el contenedor-articulos
const contArticulos = document.getElementById('contenedor-articulos')
const generadorArticulos = (title, description) => {
    const article = `
        <article>
            <h3>${title}</h3>
            <h4>${description}</h4>
        </article>
    `
    return article
}

const newArticle = generadorArticulos('Este es titulo del articulo que creé', 'Esta es la descripción del articulo que creé')
console.log(newArticle)

contArticulos.innerHTML += newArticle
//Forma mas simplificada
contArticulos.innerHTML += generadorArticulos('Titulo de mi segundo articulo', 'Descripcion de mi segundo articulo')
contArticulos.innerHTML += generadorArticulos('Titulo de mi tercero articulo', 'Descripcion de mi tercero articulo')

//createElement y appendChild
const createExample = document.getElementById('ejemplo-create')
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Soy un paragraph creado con createElement'
// createExample.innerHTML = newParagraph // NO SE UTILIZA innerHTML para createElement
createExample.appendChild(newParagraph)

//Función para crear diferentes elementos con createElement
const creadorContainer = document.getElementById('creador-elementos')
const generadorElementos = (title, description) => {
    const h2 = document.createElement('h2')
    const contenido = document.createElement('p')

    h2.textContent = title
    contenido.textContent = description 

    creadorContainer.appendChild(h2)
    creadorContainer.appendChild(contenido)

}

generadorElementos('Esto lo creé con createElement', 'Super útil ésta herramienta')
generadorElementos('Esto lo creé con createElement', 'Super útil ésta herramienta')
generadorElementos('Esto lo creé con createElement', 'Super útil ésta herramienta')
generadorElementos('Esto lo creé con createElement', 'Super útil ésta herramienta')

//classList
//add(), remove(), contains(), toggle()
innersExample.classList.add('inners') //añadir class a element
innersExample.classList.remove('inners') //quitar class a element
const button = document.querySelector('button')
function toggleClass() {
    // innersExample.classList.toggle('inners')

    //Otra forma de hacerlo
    console.log(innersExample.classList.contains('inners'))
    if(innersExample.classList.contains('inners')){
        button.innerText = 'Cambiar a color tomato'
        innersExample.classList.remove('inners') 
    } else {
        button.innerText = 'Sacar el color tomato'
        innersExample.classList.add('inners') 
    }
}