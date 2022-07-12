let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto ");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("titulo_principal");
let elementoPai = document.querySelector("container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);

