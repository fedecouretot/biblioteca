enum BookGenre {
  Fiction = "fiction",
  NonFiction = "non-Fiction",
  Suspense = "suspense",
  Mystery = "mystery",
}

interface Book {
  id: number;
  title: string;
  author: string;
  genre: BookGenre;
  available: boolean;
}

class Library {
  private books: Book[] = []; 

  addLivro(book: Book): void {
    this.books.push(book);
  }

  buscarLivro(query: string): Book[] {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  empresarLivro(bookId: number): string {
    const book = this.books.find((book) => book.id === bookId);
    if (!book) {
      return 'Livro não encontrado.';
    }
    if (book.available) {
      book.available = true;
      return 'Livro emprestado com sucesso!';
    } else {
      return 'O livro não está disponível.';
    }
  }

  devolucaoLivro(bookId: number): string {
    const book = this.books.find((book) => book.id === bookId);
    if (!book) {
      return 'Livro não encontrado.';
    }
    if (!book.available) {
      book.available = true;
      return 'Livro devolvido com sucesso!';
    } else {
      return 'Este livro já está disponível.';
    }
  }

  librosDisponiveis(): Book[] {
    return this.books.filter((book) => book.available);
  }
}


const library = new Library();


const book1: Book = {
  id: 1,
  title: 'Jurassic Park',
  author: 'Michael Crichton',
  genre: BookGenre.Fiction,
  available: true
};

const book2: Book = {
  id: 2,
  title: 'Som da Liberdade',
  author: 'Angel Studio',
  genre: BookGenre.NonFiction,
  available: false
};

const book3: Book = {
  id: 3,
  title: 'Indiana Jones',
  author: 'George Lucas',
  genre: BookGenre.Suspense,
  available: true
};

library.addLivro(book1);
library.addLivro(book2);
library.addLivro(book3);

console.log(library.buscarLivro('Jurassic')); 
console.log(library.buscarLivro('Michael Crichton')); 

console.log(library.empresarLivro(1)); 
console.log(library.empresarLivro(2)); 

console.log(library.devolucaoLivro(1)); 
console.log(library.devolucaoLivro(2)); 

console.log(library.librosDisponiveis()); 
