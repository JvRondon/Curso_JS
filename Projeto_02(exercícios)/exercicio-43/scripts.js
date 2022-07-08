const verificarMarcar = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(verificarMarcar.test("Marca: Nike"));
console.log(verificarMarcar.test("Marca: Adidas"));
console.log(verificarMarcar.test("Marca: Puma"));
console.log(verificarMarcar.test("Marca: Asics"));
