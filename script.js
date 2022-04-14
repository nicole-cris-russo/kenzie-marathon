function position(firstPlace, secondPlace, lastPlace) {
    let participantes = [firstPlace, secondPlace, lastPlace]
    if (participantes[0] == 'Daniel' ) {
        console.log('Caso Daniel fosse o primeiro colocado (inalterado):')
        console.log('1º - ' + participantes[0])
        console.log('2º - ' + participantes[1])
        console.log('3º - ' + participantes[2])
    } else if (participantes[1] == 'Daniel') {
        participantes[0] = 'Daniel'
        participantes[1] = firstPlace
        console.log('Caso Daniel fosse o segundo colocado:')
        console.log('1º - ' + participantes[0])
        console.log('2º - ' + participantes[1])
        console.log('3º - ' + participantes[2])
    } else if (participantes[2] == 'Daniel') {
        participantes[1] = 'Daniel'
        participantes[2] = secondPlace
        console.log('Caso Daniel fosse o terceiro colocado:')
        console.log('1º - ' + participantes[0])
        console.log('2º - ' + participantes[1])
        console.log('3º - ' + participantes[2])
    }
    return participantes
}

console.log(position('Daniel', 'Rafael', 'Manoel'))
console.log(position('Rafael', 'Daniel', 'Manoel'))
console.log(position('Rafael', 'Manoel', 'Daniel'))