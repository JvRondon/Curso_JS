function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favor, insisra somente números")
   } else{
    return number;
   }
}

checarNumero(5);
checarNumero("aopdhhw3");

let number = prompt("Insira um número");
checarNumero(number);