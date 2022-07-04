function multiplicarTresNum(x,y,z){
    return x*y*z;
}
console.log(multiplicarTresNum(5,4,3));

const mult = multiplicarTresNum(3,2,77);

console.log("O valor de mult é "+mult);


function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else{
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,00));
console.log(podeDirigir(18,1));
console.log(podeDirigir(17,false));