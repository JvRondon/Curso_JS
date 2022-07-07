const pessoas = {
    maos : 2,
}

console.log(Object.getPrototypeOf(pessoas));
console.log(Object.getPrototypeOf(pessoas) === Object.prototype);

console.log(pessoa.hasOwnProperty("maos"));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty("maos"));

console.log(Object.getPrototypeOf(pessoaNova) === Object.prototype);