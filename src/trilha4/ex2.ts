interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    constructor(
        public titulo: string,
        public conteudo: string
    ) {}

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

// Teste
const texto = new Texto("Aviso", "A loja estará fechada amanhã.");
console.log(texto.exibir());