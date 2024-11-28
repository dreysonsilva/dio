class Pessoa{
    nome;
    idade;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    };

    descrever(){
        console.log("eu nome é: "+this.nome+" e minha idade "+this.idade);
    }
}

function compararPessoas(pessoa1,pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        console.log(pessoa1.nome+" mais velha que "+pessoa2.nome);
    }if(pessoa2.idade > pessoa1.idade){
        console.log(pessoa2.nome+" mais velha que "+pessoa1.nome);
    }else{
        console.log("idades iguais");
    }
}

const dreyson = new Pessoa('Dreyson', 50);
const anderson = new Pessoa('Anderson', 43);


compararPessoas(dreyson,anderson);