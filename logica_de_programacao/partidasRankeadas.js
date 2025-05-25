

Node.js
Result Size: 528 x 365
prog.js Input + +
resulPartida
/* ENTRADA */
let vitorias = 10;
let derrotas = 2;
​
/* PROCESSAMENTO */
let resulPartida = Rankeada(vitorias, derrotas);
​
function Rankeada(vitorias, derrotas) {
    var resulPartida = vitorias - derrotas;
    return resulPartida;
}
​
if (resulPartida < 8) {
    console.log("Plástico");
}