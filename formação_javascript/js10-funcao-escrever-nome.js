/*Função escrever nome*/
function escreverNome(nome){
    console.log(" Meu nome é: "+nome);
}

escreverNome('Dreyson');
escreverNome('Anderson');

/*Função verificar idade*/
function verificarIdade(idade){
    if(idade<18){
        console.log('Sua idade é menor de 18 e sua idade é: '+idade)
    }else{
        console.log('Maior de idade e sua idade é: '+idade);
    }
}

verificarIdade(19);