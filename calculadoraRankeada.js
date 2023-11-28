// CALCULADORA DE PARTRIDAS RANKEADAS

// O QUE DEVE SER ULTILIZADO

// - VARIÁVEIS
// - OPERADORES
// - LAÇOS DE REPETIÇÃO
// - ESTRUTURA DE DECISÕES
// - FUNÇÕES


// OBJETIVO

// CRIE UMA FUNÇÃO QUE RECEBE COMO PARÂMETRO A QUANTIDADE DE VITÓRIAS E DERROTAS DE UM JOGADOR.
//DEPOIS DISSO RETORNE O RESULTADO PARA UMA VARIÁVEL, O SALDO DE RANKEADAS DEVE SER FEITO ATRAVÉS DO CALCULO (VITÓRIAS - DERROTAS)

// SE VITÓRIAS FOR MENOR DO QUE 10 = FERRO
// SE VITÓRIAS FOR ENTRE 11 E 20 = BRONZE
// SE VITÓRIAS FOR ENTRE 21 E 50 = PRATA
// SE VITÓRIAS FOR ENTRE 51 E 80 = OURO
// SE VITÓRIAS FOR ENTRE 81 E 90 = DIAMANTE
// SE VITÓRIAS FOR ENTRE 91 E 100 = LENDÁRIO
// SE VITÓRIAS FOR MAIOR OU IGUAL A 101 = IMORTAL


// Saída

// AO FINAL DEVE SE EXIBIR UMA MENSAGEM: "O HERÓI TEM SALDO DE ** {SALDO DE VITÓRIAS}** E ELE ESTÁ NO NÍVEL DE **{NÍVEL DO PERSONAGEM}** "

const nomeDoHeroi = "Danilo O Bárbaro"

function calcularNivelHeroi(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas

    let nivelDoHeroi;

    if (saldoVitorias <= 10) {
        nivelDoHeroi = "Ferro"
    } else if (saldoVitorias <= 20) {
        nivelDoHeroi = "Bronze"
    } else if (saldoVitorias <= 50) {
        nivelDoHeroi = "Prata"
    } else if (saldoVitorias <= 80) {
        nivelDoHeroi = "Ouro"
    } else if (saldoVitorias <= 90) {
        nivelDoHeroi = "Diamante"
    } else if (saldoVitorias <= 100) {
        nivelDoHeroi = "Lendário"
    } else {
        nivelDoHeroi = "Imortal"
    }

    return {
        saldoVitorias: saldoVitorias,
        nivelDoHeroi: nivelDoHeroi
    };
}

let vitorias = 101
let derrotas = 50

let resultado = calcularNivelHeroi(vitorias, derrotas)

console.log(`O herói ${nomeDoHeroi} tem saldo de ${resultado.saldoVitorias} pontos e está no nível  ${resultado.nivelDoHeroi}.`)
