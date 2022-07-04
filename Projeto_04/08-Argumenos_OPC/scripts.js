function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Esta função preceisa de 2 argumentos");
    }else{
        return a + b;
    }
}
console.log(soma(8,1));


function saudação(nome,idade){
   
    if (idade === undefined){
console.log("Olá ", nome);
}else{
    console.log("Olá ",nome ,"você tem ",idade, "anos")
}
}
saudação("João");
saudação("Paulo" ,34);