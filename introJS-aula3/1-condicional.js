const idade = 18
const listaDestinos = new Array(
    "São Paulo",
    "Rio de Janeiro",
    `Salvador`,
    `Fortaleza`,
)

console.log(listaDestinos)

if (idade >= 18){
    console.log(`Passagem comprada: ${listaDestinos[1]}`)
    listaDestinos.slice(1,1)
    console.log(`Destinos restantes: ${listaDestinos}`)
}else{
    console.log("O comprador ainda não atingiu a idade necessária!")
};

