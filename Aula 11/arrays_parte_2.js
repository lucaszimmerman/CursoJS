// > ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS 

let array1 = [30, 12, 45, 34, 29]
let array2 = [30, 12, 45, 34, 29]

// Fatiamento: slice 

console.log(array1.slice(0,2));

console.log(array1.slice(2));

console.clear();

// Adicionando elementos: push| unshift

console.log("Antes de adicionar", array2);

array2.push(10, 20, 30)
array2.push(40)


console.log("Depois de adicionar:", array2);

console.log("Antes de adicionar com unshift:", array2);

array2.unshift(0)
console.log("Depois de adicionar com unshift:", array2)

console.clear()

//Removendo elementos: pop | shift

console.log('Antes de remover com o pop:', array2);

array2.pop()

console.log('Depois de remover com o pop:', array2)

console.log('Antes de remover com o shift:', array2);

array2.shift()

console.log('Depois de remover com o shift:', array2)

console.clear();

// Concatenando arrays: concat

console.log('Array 1: ', array1);
console.log('Array 2: ', array2);

console.log(array1.concat(array2));
console.log(array2.concat(array1));

console.clear();

// Buscando elementos: indexOf | lastIndexOf

console.log(array1);

let indiceDoElemento34 = array1.indexOf(34)

console.log(indiceDoElemento34)

let array3 = [1,2,3,3,5,3]

console.log(array3.lastIndexOf(3))

console.clear();

// Descobrindo a existência de um elemento: includes

console.log(array1);

console.log(array1.includes(10));

console.clear();

//Invertendo arrays: reverse

console.log("array1 normal:", array1);

const arrayInvertido = array1.reverse()

console.log('array1 invertido: ', arrayInvertido);