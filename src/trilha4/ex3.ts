interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[] = [];

    adicionarProduto(produto: ProdutoLoja) {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(p => p.codigo === codigo);
    }
}

// Teste
const loja = new Loja();
loja.adicionarProduto({ codigo: 101, nome: "Teclado" });
loja.adicionarProduto({ codigo: 202, nome: "Monitor" });

console.log(loja.buscarProdutoPorCodigo(202));
console.log(loja.buscarProdutoPorCodigo(999)); 