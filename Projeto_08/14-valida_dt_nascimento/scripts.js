const validaData = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/;

console.log(validaData.test("27/10/2004"));
console.log(validaData.test("25/12/1980"));
console.log(validaData.test("29/10/2009"));
console.log(validaData.test("18/05/2006"));
console.log(validaData.test("99/99/9999"));