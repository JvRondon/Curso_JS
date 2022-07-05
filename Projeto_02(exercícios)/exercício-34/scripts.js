const Calculadora = {
    soma : function(a,b) {
        return a+b;
    },
    subtrair: function(a,b){
        return a+b;
    },
    multiplicar: function(a,b){
        return a*b;
    },
    dividir : function(a,b){
        return a/b;
    }
}   
console.log("Soma: ",Calculadora.soma(10,5));
console.log("Subtrair: ",Calculadora.subtrair(10,5));
console.log("Multplicar: ",Calculadora.multiplicar(10,5));
console.log("Dividir: ",Calculadora.dividir(10,5));