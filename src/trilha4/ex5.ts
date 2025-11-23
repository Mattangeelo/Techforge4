interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[] = [];

    adicionarLivro(livro: LivroBiblioteca) {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const gestao = new BibliotecaGestao();

gestao.adicionarLivro({ titulo: "Duna", autor: "Frank Herbert", genero: "Ficção", disponivel: true });
gestao.adicionarLivro({ titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true });
gestao.adicionarLivro({ titulo: "Neuromancer", autor: "William Gibson", genero: "Ficção", disponivel: false });

console.log("Ficção:", gestao.filtrarPorGenero("Ficção"));
console.log("Autor Tolkien:", gestao.buscarPorAutor("Tolkien"));
console.log("Disponíveis ordenados:", gestao.obterLivrosDisponiveisOrdenados());