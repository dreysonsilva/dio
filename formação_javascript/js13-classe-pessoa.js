class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura *this.altura);
    }

    classificacao(){
        const imc = this.calcularImc();
        if(imc<18.5){
           return ('Abaixo do peso')
        }else if(imc >= 18.5 && imc <25){
            return ('Peso normal');
        }else if(imc >=30 && imc<40){
            return('Acima do peso');
        }else{
            return ('Obsidade grave');
        }
    }
}


const anderson = new Pessoa('Anderson',200,1.97);
console.log(anderson.nome);
console.log(anderson.calcularImc());
console.log(anderson.classificacao());
