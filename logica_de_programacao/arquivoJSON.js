/*TELA*/
let nome = "Dreyson";
let idade = 19;
let products = ["Mouse", "teclado",monitor];
let productsValue = [10.20,129.99, 899.99];


/*Imprimindo*/
generateInvoice(nome,products,productsValue, idade);

/*Função*/
function generateInvoice (nome,products,productsValue,idade){
    console.log("Nome do comprador: "+nome);
    console.log("A idade: "+idade);
    console.log("----------------");
    console.log("Produtos: "+products[0]);
    console.log("O valor é: "+productsValue[0])
}