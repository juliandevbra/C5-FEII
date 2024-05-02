// console.log('Mi segundo console.log')

let a = 1
var b = 2
const c = 3

function scopeVar() {
    if(true){
        var x = 10
        console.log(x)
    }
    console.log(x)
}
scopeVar()
const scopeLet = () => {
    if(true){
        let y = 20
        console.log(y)
    }
    //Esto tira error porque no está al alcance
    // console.log(y)
}
scopeLet()

let condicion = false
//alert()
if(condicion === true){
    alert('La condicion es true')
} else {
    alert('La condicion es false')
}

// confirm()
const pregunta = confirm('Te gusta el front?')
console.log(pregunta)

if(pregunta == true){
    alert('Que bueno! A mi también!')
} else {
    alert('No sabes de lo que te perdes...')
}

//prompt()
const nombre = prompt('Como es tu nombre?')
console.log(nombre)
if(!nombre){ //Si nombre es igual a null, undefined, '' o false
    console.log('Debe colocar un nombre...')
} else if(nombre.length < 3){
    console.log('Debe colocar un nombre de mas de 3 letras')
} else {
    console.log('Tu nombre es: '+nombre)
}

//Bucles
//Bucle for
for(let i = 1; i <= 10; i++){
    console.log('El contador es: ' + i)
}
//Bucle while
let j = 0
while(j <= 10){
    console.log('El contador es: '+ j)
    j++
}

//do-while
let k = 0
do{
    console.log('El contador es: '+k)
    k++
} while(k <= 10)

