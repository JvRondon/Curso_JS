const  reg3 = /[12345]/;

console.log(reg3.test("Temos o número 6?"));
console.log(reg3.test("Temos o número 2?"));
console.log(reg3.test("Temos o número 60?"));

const reg4 = /[0-9]/;

console.log(reg4.test("Temos o número 99?"));
console.log(reg4.test("Temos o número 55?"));
console.log(reg4.test("Temos o número 75?"));
console.log(reg4.test("Temos o número 98476543251038954796234654325135879685472013657?"));