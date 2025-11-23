class Pagamento {
    processar(): void {
        console.log("Processando pagamento genérico...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) { super(); }

    processar(): void {
        if (this.numeroCartao.length !== 16) {
            console.log("Número de cartão inválido!");
            return;
        }
        console.log("Pagamento com cartão aprovado!");
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigo = "BOLETO-" + Math.floor(Math.random() * 999999);
        console.log("Boleto gerado:", codigo);
    }
}

function processarPagamentos(pagamentos: Pagamento[]) {
    pagamentos.forEach(p => p.processar());
}

processarPagamentos([
    new PagamentoCartao("1234567890123456"),
    new PagamentoBoleto()
]);