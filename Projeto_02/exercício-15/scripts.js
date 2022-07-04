let num = 41;
let divisoes = 0;

for(let x = 1; x > 0; x++){
    if (num % 1 ==0){
        divisoes++;
    }
} 

if(divisoes == 2){
    console.log(`O número ${num} é primo!`);
} else {
    console.log(`O número ${num} não é primo!`);
}