const listaDestinos = new array(
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    `Fortaleza`,
);

const idade = 19;
let passagemComprada = false;
const temAcompanhante = false;
const destino = "Rio de Janeirooo"
const podeComprar = idade >= 18 || temAcompanhante == true;
console.log(podeComprar); 
console.log(listaDestinos);
let destinoExiste = false;
let contador = 0;

/*while(contador<= listaDestinos.length-1){
    if(listaDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}*/  

for(let i = 0 ; i< listaDestinos.length; i++){
    if(listaDestino[i] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
}