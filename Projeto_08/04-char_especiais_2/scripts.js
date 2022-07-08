const dia = /\d\d/;

console.log(dia.test(27) && '27'.length == 2);
console.log(dia.test('asdwasd'));
console.log(dia.test(2015) && "2015".lenght == 2);

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("aws"));
console.log(palavraTresLetras.test("awss") && "awss".length == 3);
console.log(palavraTresLetras.test("aw"));

