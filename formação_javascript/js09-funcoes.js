function incrementeJuros(valor, porcetagemJuros){
    const valorDeAcrescimo = (porcetagemJuros/100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementeJuros(100,10));
console.log(incrementeJuros(100,15));
console.log(incrementeJuros(100,20));

function testa(testeNome){
    console.log("teste" +testeNome)
}
testa();

function sayMyname(name){
    console.log('Your name is :'+name);
}

sayMyname('Dreyson');