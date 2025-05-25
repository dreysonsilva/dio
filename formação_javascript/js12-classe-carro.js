//CLASS
class Carro{
    marca;
    cor;
    gastoMedioPorkm;

    constructor(marca, cor,gastoMedioPorkm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorkm = gastoMedioPorkm;
    }
    calcularGastoDePercurso(distanciaEmKM,precoCombustivel){
        return distanciaEmKM * this.gastoMedioPorkm * precoCombustivel;  
    }
}

//MAIN   
const celta = new Carro('chevrolet','prata', 1/12);
console.log(celta.calcularGastoDePercurso(70,5));

const uno = new Carro('Fiat','preto',1/10);
console.log(uno.calcularGastoDePercurso(70,5));