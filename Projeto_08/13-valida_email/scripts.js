const validaEmail  = /\w+@\w+\.\w+/;


console.log(validaEmail.test("algumacoisa@coisa.com"));
console.log(validaEmail.test("algumacoisa@coisa"));
console.log(validaEmail.test("algumacoisa#coisa.com"));
