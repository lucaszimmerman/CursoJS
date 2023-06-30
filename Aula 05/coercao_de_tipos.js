// > COERÇÃO (Conversão)  DE TIPOS

// 1 - Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroComFormatoDeString = String(numero)

console.log(numeroComFormatoDeString, typeof numeroComFormatoDeString)

console.log(Number('12345683'))
console.log(parseFloat('2342.345'))
console.log(parseInt('2342.345'))
console.log(Boolean(1293892))

console.clear();

// - 2. Coerção Implícita

console.log(10 + "1")
console.log("10" - 1)
console.log(10 * '3')
console.log(10 / '3')

console.log(10 - "asseses")
