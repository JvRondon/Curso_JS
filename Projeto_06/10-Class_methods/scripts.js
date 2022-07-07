class Cachorro {
    constructor (raca,patas,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au ")
    }
}

Cachorro.prototype.patas = 4;

let salsicha = new Cachorro("Salsinha", "Mel");

console.log(salsicha.cor);

salsicha.latir();

