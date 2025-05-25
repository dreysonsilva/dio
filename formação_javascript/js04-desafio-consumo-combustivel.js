/*ENTRADA*/
let precoCombustivel = 5.79;
let KMporLitros = 12;
let distanciaKM = 1580;

/*PROCESSAMENTO*/
let litrosConsumidos = distanciaKM / KMporLitros;
let valorGasto = litrosConsumidos * precoCombustivel;

/*SAÍDA*/ /*.toFixed(2) - para arrendondar duas casas decimais*/
console.log("Valor gasto nessa viagem é R$ "+valorGasto.toFixed(2)+" reais");