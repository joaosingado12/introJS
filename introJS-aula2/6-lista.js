console.log("Criando array em js")

const salvador = `Salvador`
const saoPaulo = `São Paulo`
const rioDeJaneiro = `Rio de Janeiro`


const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log(`O destino de salvador ${salvador}`)

console.log(listaDestinos[2])


//push adiciona elementos a lista
listaDestinos.push(`Curitiba`)

console.log(listaDestinos)

//splice exclui elementos da lista (definindo em qual posição começará a exclusão e também a quantidade de elementos)
listaDestinos.splice(0, 3)
console.log(listaDestinos)

// listaDestinos = 2; (error)