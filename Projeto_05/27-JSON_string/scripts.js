 let pessoa = {
    "nome" : "João",
    "idade" : 17,
    "profissão" : "Programador",
    "hobbies" : ["Video Game", "ler", "Anime"] 
   }
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
