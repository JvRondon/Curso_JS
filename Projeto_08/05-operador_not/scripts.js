const negarAeB = /[^ab]/;

console.log(negarAeB.test('a'));
console.log(negarAeB.test('Aqui tem A e B'));

const negarAtoB = /[^a-z]/;
console.log(negarAeB.test('a'));
console.log(negarAeB.test('Aqui tem A e B'));
console.log(negarAeB.test('123 az'));
  