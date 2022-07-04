let pessoa ={
    nome :"João"
}

pessoa = pessoa2;

let pessoa3={
    nome:"Maria"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa2);
console.log(pessoa3 == pessoa );

pessoa2.nome = "Pedro"
console.log(pessoa.nome);

pessoa.nome = "Zico";
console.log(pessoa2.nome)