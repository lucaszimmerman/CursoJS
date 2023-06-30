// OBJETOS

// Como criar um objeto no JavaScritpt

let pessoa = {
    nome: 'Lucas',
    idade: 19
}

console.log(pessoa);

console.log(pessoa.nome);

// Como adicionar ou editar um valor 

pessoa.altura = 1.77
pessoa.nome = 'Lucas Zimmerman'

// Como deletar um atributo do objeto

delete pessoa.altura

console.log(pessoa);

// Como percorrer o objeto?
console.clear()

for (let chave in pessoa) {
     console.log(chave)
}
