const listaDestinos = new Array(
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    `Fortaleza`,
);
const idade = 19;
let passagemComprada = false;
const temAcompanhante = false;
console.log(listaDestinos);

//operador OU
if (idade >= 18 || temAcompanhante == true){
    console.log(`Passagem comprada: ${listaDestinos[1]}`);
    listaDestinos.splice(1,1);
    console.log(`Destinos restantes: ${listaDestinos}`);
    passagemComprada = true; 
}else{
    console.log("Passagem não autorizada");
}

//operador E
if(passagemComprada ==true && idade>=18){
    console.log("Bem vindo ao embarque");
}else{
    console.log("Solicito a assinatura do acompanhante");
};