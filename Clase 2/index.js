//Math
console.log(Math)
let decimal = 3.478
//Round, Floor, y Ceil
let decimalRound = Math.round(decimal)
let decimalFloor = Math.floor(decimal)
let decimalCeil = Math.ceil(decimal)
console.log('Round', decimalRound)
console.log('Floor', decimalFloor)
console.log('Ceil', decimalCeil)



//Min y Max
let num1 = 44
let num2 = 78
let num3 = 16
let arrNum = [44, 78, 16, 2, 200]
// Lo mismo que Math.min(num1,num2, num3)
let minNum = Math.min(...arrNum) //Spread Operator
// Lo mismo que Math.max(num1, num2, num3)
let maxNum = Math.max(...arrNum)
console.log(minNum)
console.log(maxNum)

//Math random
let randomNum = Math.random() // [0, 1)
let randomNum2 = Math.floor(Math.random() * 10) + 1 // [1, 10]
console.log(randomNum)

// Bucles for
let lista = ['Oriana', 'Esteban', 'Carlos', 'Ailin']
//For ... [of]
for(let nombre of lista){
    console.log(nombre)
}

lista.push('Ayxa')
//forEach()
lista.forEach((nombre, index) => {
    console.log(index + ' - ' + nombre)
})

//for ... {in}
let obj = {
    a: 1,
    b: 2, 
    c: 3
}
// console.log(obj['c'])
for(let clave in obj ){
    console.log(clave + ':' +obj[clave])
}


//Ejemplo fusionando for [of] y for {in}
let estudiantes = [
    {
        nombre: 'Eliana',
        materia: 'FE2',
        status: 'En curso...'
    }, 
    {
        nombre: 'Brayan',
        materia: 'FE2',
        status: 'Aprobado'
    }, 
    {
        nombre: 'Diana',
        materia: 'FE2',
        status: 'Libre'
    }, 
    {
        nombre: 'Israel',
        materia: 'FE2',
        status: 'En curso...'
    }, 
]
// console.log(estudiantes[0])
estudiantes.forEach(estudiante => {
    //Este ejemplo se resume en la linea 94 con el método find()
    // if(estudiante.nombre.toLowerCase() == 'eliana') {
    //     console.log(estudiante)
    // }

    for(let clave in estudiante){
        console.log(estudiante[clave])
    }
    console.log('---------------')
})

const findEstudiante = estudiantes.find(estudiante => estudiante.nombre.toLowerCase() == 'eliana')
console.log(findEstudiante)