function imprimirNoConsole(){
    console.log("Salve");
}

//invocar a função
imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("O número é:" + num);
}

imprimirUmNumero(3);

let numeroAleatório =  function(){
    console.log(Math.random());
}

numeroAleatório();