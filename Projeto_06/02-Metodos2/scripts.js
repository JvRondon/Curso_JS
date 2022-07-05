const Lobo = {
    raca:"SRD" ,
    uivar:function(){
        console.log("Auuuuuuuuuuuuuuu");
    },
    rosnar:function(){
        console.log("Grrrrrr");
    },
    setRaca:function(raca){
        this.raca = raca;
    },
    getRaca:function(){
        return "A raça é "+this.raca
    }
}

console.log(Lobo.raca);

Lobo.setRaca("Mountain");

console.log(Lobo.raca);

console.log(Lobo.getRaca());
