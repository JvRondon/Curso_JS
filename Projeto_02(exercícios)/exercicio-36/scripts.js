class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    
    deposito(valor){
        this.saldo += saldo;
    }

    saque(valor){
        this.saldo -= saldo;
    }

}

let conta = new Conta(1000);
conta.deposito(1000);
conta.saque(500);