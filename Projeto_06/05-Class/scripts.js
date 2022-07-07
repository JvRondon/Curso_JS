let dog = {
    patas: 4 ,
    raca: 'SRD',
    latir : function(){
        console.log("Au au au ");
    }
}

let Golden = Object.create(dog);

Golden.latir();

Golden.raca = "Golden Retrivier";

console.log(golden.raca);
console.log(dog.raca);

let husky = Object.create(dog);

husky.raca = "Husky Siberiano"; 