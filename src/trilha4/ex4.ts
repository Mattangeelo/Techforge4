interface ILivro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: ILivro[] = [];

    adicionarLivro(livro: ILivro) {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): ILivro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Duna", autor: "Frank Herbert", disponivel: false });

console.log(biblioteca.buscarLivrosDisponiveis());