const nome = /\w+: (João|Maria|Augusto)/;

console.log(nome.test("Nome: João"));
console.log(nome.test("Nome: Victor"));
console.log(nome.test("Nome: Augusto"));