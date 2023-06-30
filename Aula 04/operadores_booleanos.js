// Operadores Booleanos

const numero = 10;

console.log(numero == 10)
console.log(numero > 20)

console.clear();

console.log(10 != 10)

// AND => &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;
console.log("Posso dirigir? " + possoDirigir)

//OR -> ||

const devoVotar = idade < 18 || idade >= 70;

// NOT -> !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso)
