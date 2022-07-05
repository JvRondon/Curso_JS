const pessoas = {
    maos : 2,
}

console.log(Object.getPrototypeOf(pessoas));
console.log(Object.getPrototypeOf(pessoas) === Object.prototype);

console.log(pessoa.hasOwnProperty("maos"));