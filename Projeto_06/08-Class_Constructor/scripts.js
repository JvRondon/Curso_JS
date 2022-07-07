function CACHORRO(raca, patas, cor){
    this.raca = raca;
    this.patas = patas; 
    this.cor = cor;
}

CACHORRO.prototype.uivar = function() {
    console.log("Auuuuuu");
}
CACHORRO.prototype.latir = function() {
    console.log("Au Au");
}

let pinscher = new CACHORRO("Pinscher",4 ,"Mesclado")

pinscher.uivar();
pinscher.latir();