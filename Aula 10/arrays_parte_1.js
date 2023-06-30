// ARRAYS

// Como criar um array?

let array = ['Lucas', 19, 1.83, true]

console.log(array);

// - Como acessar os elementos do array

console.log('Primeiro elemento:', array[0])
console.log('Segundo elemento:', array[1])
console.log('Terceiro elemento:', array[2])
console.log('Quarto elemento:', array[3])


// - Como obter o tamanho do array

console.log(array.length);

console.clear();
// - Percorrendo arrays

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.clear();

for (let elemento of array) {
    console.log(elemento);
}

console.clear();

for (let indice in array) {
 console.log(indice)
}