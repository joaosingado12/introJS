const idade = 17;
const listaDestinos = new Array(
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    `Fortaleza`,
);

const temAcompanhante = false;

console.log(listaDestinos);

if (idade >= 18){
    console.log(`Passagem comprada: ${listaDestinos[1]}`);
    listaDestinos.splice(1,1);
    console.log(`Destinos restantes: ${listaDestinos}`);
}else{
    if(temAcompanhante){
        console.log("Pessoa autorizada a adiquirir a passagem");
        listaDestinos.splice(1,1);
        console.log(`Destinos restantes: ${listaDestinos}`);
    }else{
        console.log("Pessoa sem acompanhante e sem idade o suficiente");
    }
};
