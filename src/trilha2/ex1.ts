class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
            return;
        }
        this.saldo -= valor;
    }
}