// Aula de vetor

let num = [5,6,8,9,3]
num.push(2)           // push acrescenta o elemento.
num.sort()            // sort organiza a ordem
console.log (num)
console.log (`O vetor tem ${num.length} posições.`)    // identifa a qtd de posições
console.log (`O primeiro valor do vetor é: ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log ('Esse numero não foi encontrado')
} else {
    console.log (`O valor 8 está na posição: ${pos}`)
}
