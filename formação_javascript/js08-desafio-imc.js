function calcularImc(peso, altura){
    return peso /(altura*altura);//Math.pow(altura,2) a mesma coisa que o quadrado
}
function classificacaoIMC(imc){
    if(imc<18.5){
        return "Você esta abaixo do peso";
    }else if(imc >=18.5 && imc <=25){
        return "Peso normal";
    }else if(imc > 25 && imc <=30){
        return "Acima do peso";
    }else if(imc >30 && imc <= 40){
        return "Obeso";
    }else{
        return "Obsidade Grave";
    }
}
function main(){
    let peso = 80;
    let altura = 1.65;

    let imc = calcularImc(peso,altura);
    console.log(classificacaoIMC(imc));
}

main();