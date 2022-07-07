function CACHORRO(raca, patas, cor){
    this.raca = raca;
    this.patas = patas; 
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuu")
    }
   
}
let pinscher = new CACHORRO("Pinscher",4 ,"Mesclado")