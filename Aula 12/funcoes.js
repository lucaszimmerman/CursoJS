// FUNÇÕES

function saudacao() {
    console.log('Bem-vindo!');
}

saudacao()

console.clear()

// Como enviar parametros para as funções

function saudacao(nome, curso) {
    console.log(`Olá, ${nome} ! Bem-vindo ao curso de ${curso}!`);
}

saudacao('Lucas', 'JavaScript')

console.clear()

// Retorno da função

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(10, 20)

console.log(resultado);

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }
    
    return false
}