function saudacao(nome){
    if (typeof nome != 'string'){
        throw new Error("Parâmetro incorreto. Insira uma string.")
    } else {
        console.log(`Olá ${nome}.`)
    }
}
saudacao("João");
saudacao(5);

console.log("teste");