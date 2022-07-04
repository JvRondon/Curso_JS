function checarTamanhoTexto (texto){
    if (texto.length > 10){
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

checarTamanhoTexto("Algo1");
checarTamanhoTexto("Talvez");
checarTamanhoTexto("qwuhdasdwnnasdlknwasdwoiahsdalkn3woih");
