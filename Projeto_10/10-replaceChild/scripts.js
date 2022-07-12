let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto ");

novoElemento.appendChild(texto);
 
let heading = document.querySelector("#titulo");
let paiHeadind = heading.parentNode;

paiHeadind.replaceChild(novoElemento, heading);