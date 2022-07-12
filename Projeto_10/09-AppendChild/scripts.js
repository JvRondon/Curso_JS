let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto ");

novoElemento.appendChild(texto);
 
let p = document.querySelector("#paragrafo");
let pai = p.parentNode;

pai.appendChild(novoElemento )
