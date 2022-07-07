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

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let salsicha = new Cachorro("Salsinha", "Mel");

console.log(salsicha);

salsicha.latir();

console.log(Cachorro.prototype.raca);
console.log(salsicha.raca);
 
//acessando o symbol
console.log(Cachorro.prototype[patas]);

console.log(salsicha[patas]);