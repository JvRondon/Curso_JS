let elemento = document.querySelector('#titulo');

console.log('altura:' + elemento.scrollHeight);  //altura
console.log('largura:' + elemento.scrollWidth);   //largura

console.log('altura:' + elemento.clientHeight);     //não considera bordas
console.log('largura:' + elemento.clientWidth);   