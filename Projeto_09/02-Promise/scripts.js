let p = Promise.resolve(5);

console.log("Outros coódigos");

console.log(p);

Promise.then((value) => {console.log(`O valor é ${value}`)});

//ou

p.then((value) => {return value + 5});
p.then((value) => {console.log(value)});
