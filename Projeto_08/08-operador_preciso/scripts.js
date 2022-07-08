const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(67)99220-1331"));
console.log(telefone.test("12345-12345"));