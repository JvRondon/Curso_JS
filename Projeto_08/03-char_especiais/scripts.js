const pontoRegex = /./;

console.log(pontoRegex.test('123'));
console.log(pontoRegex.test("wasd"));
console.log(pontoRegex.test("wasd321"));
console.log(pontoRegex.test(' '));


const dRegex = /\d/; //[0-9]

console.log('d')
console.log(dRegex.test('123'));
console.log(dRegex.test("wasd"));
console.log(dRegex.test("wasd321"));
console.log(dRegex.test(' '));



const dRegex2 = /\D/; //[^0-9]     ^ = negação/não tem 

console.log('D')
console.log(dRegex2.test('123'));
console.log(dRegex2.test("wasd"));
console.log(dRegex2.test("wasd321"));
console.log(dRegex2.test(' '));  



const sRegex = /\s/;                // aceita qualquer DIGITO

console.log('s')
console.log(dRegex2.test('123'));
console.log(dRegex2.test("wasd"));
console.log(dRegex2.test("wasd321"));
console.log(dRegex2.test(' '));  




const wRegex = /\w/;                //aceita de 0-9 e de a-z               

console.log('w')
console.log(dRegex2.test('123'));
console.log(dRegex2.test("wasd"));
console.log(dRegex2.test("wasd321"))
console.log(dRegex2.test(' '));  


