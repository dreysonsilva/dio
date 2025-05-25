//const funcoes = require ('./js19-funcoes-auxiliares');
//console.log(funcoes.gets);

const {gets,print } = require ('./js19-funcoes-auxiliares');

const numeroSorteados = [];

for(let i=0;i<5;i++){
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);    
}

let maiorValor = 0;

for (let i=0;i<numeroSorteados.length;i++){
    const numeroSorteado = numeroSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(gets());