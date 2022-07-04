function verificar (dado){
    if(typeof dado === "Boolean"){
        console.log("Boolean");
    }
    else if(typeof dado === "Number"){
        console.log("Number");
    }
    else if(typeof dado === "string"){
        console.log("String");
    }
}
verificar("Algo");
verificar(false);
verificar(12);
