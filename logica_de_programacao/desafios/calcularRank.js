/* Função para calcular o saldo de Rankeadas e o nível do jogador */
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias menos derrotas
    let saldoVitorias = vitorias - derrotas;
    
    // Variável para armazenar o nível do jogador
    let nivel = '';

    // Estrutura de decisão para determinar o nível do jogador com base no número de vitórias
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Retorna uma mensagem formatada com o saldo de vitórias e o nível
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

/* Entrada de dados */
let vitorias = 45;
let derrotas = 10;

/* Processamento */
let resultado = calcularRank(vitorias, derrotas);

/* Saída */
console.log(resultado);