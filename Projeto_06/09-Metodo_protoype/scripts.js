class Cachorro {
    constructor (raca,patas,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au ")
    }
}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let salsicha = new Cachorro("Salsinha", "Mel");

console.log(salsicha);

salsicha.latir();

console.log(Cachorro.prototype.raca);
console.log(salsicha.raca);