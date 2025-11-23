abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private movies: string[] = [];

    addFavorite(item: string): void {
        if (!this.movies.includes(item)) {
            this.movies.push(item);
        }
        this.movies.sort(); // ordem alfabética
    }

    getFavorites(): string[] {
        return this.movies;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private books: string[] = [];

    addFavorite(item: string): void {
        // sempre adiciona no começo:
        this.books.unshift(item);
    }

    getFavorites(): string[] {
        return this.books;
    }
}

// Teste
const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Avatar");
filmes.addFavorite("Matrix");
filmes.addFavorite("Avatar");
console.log("Filmes favoritos:", filmes.getFavorites());

const livros = new BooksFavoriteManager();
livros.addFavorite("1984");
livros.addFavorite("Duna");
livros.addFavorite("O Hobbit");
console.log("Livros favoritos:", livros.getFavorites());
