class Mamifero{
    constructor(patas){
       this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Gato extends Mamifero{
    constructor(patas,raca){
        super(patas,patas);
        this.raca = raca;
    }
    miar(){
        console.log("Miau")
    }
}

let siames = new gato(4,"Siamês");
console.log(siames.patas); 

miar();

console.log(siames instanceof Mamifero);

console.log(coiote instanceof Mamifero);