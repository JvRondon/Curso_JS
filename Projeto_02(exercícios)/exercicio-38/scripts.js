class Endereço{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro ;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoBairro){
        this.estado = this.novoEstado;
    }

}

let endereço = new Endereço("Rua 1", "Bairro 2", "Cidade 3", "estado 4");

console.log(Endereço);

endereço.novaRua = "Rua 123"; 
endereço.novoBairro = "Bairro Birra";
endereço.novaCidade = "Cidade 312";
endereço.novoEstado = "ZS";
