const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("youtube.com"));
console.log(validaDominio.test("www.w3schools.com"));
console.log(validaDominio.test("www.instagram.com"));
console.log(validaDominio.test("www.facebook.com.br"));
 