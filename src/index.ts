enum BookGenre {
  Fiction = "fiction",
  NonFiction = "non-Fiction",
  Suspense = "suspense",
  Mystery = "mystery",
}

interface Book {
  id?:string;
  title: string;
  author: string;
  genre: BookGenre;
  available: boolean;
}


class Library {
  private books: Book[] = []; 

  addLivro(book: Book): void {
    if (!book.id) {
      book.id= this.generateId();
    }
    this.books.push(book);
  }
 

  buscarLivro(query: string): Book[] {
    const result: Book[] = [];
    for (let book of this.books) {
      if (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      ) {
        result.push(book);
      }
    }
    return result;
  }

  empresarLivro(bookId: string): string {
    const book = this.books.find((book) => book.id === bookId);
    if (!book) {
      return 'Livro não encontrado.';
    }
    if (book.available) {
      book.available = false;
      return 'Livro emprestado com sucesso!';
    } else {
      return 'O livro não está disponível.';
    }
  }

  devolucaoLivro(bookId: string): string {
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
    const availableBooks: Book[] = [];
    for (let book of this.books) {
      if (book.available) {
        availableBooks.push(book);
      }
    }
    return availableBooks;
  }

  venderLivro(bookId: string): string {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index === -1) {
      return 'Livro não encontrado para venda.'; //*indexa ou busca o livo no array*//
    }
    this.books.splice(index, 1);
    return 'Livro vendido com sucesso!'; //*tira os livros do array*//
  }

  private generateId(): string {
    return (Math.floor(Math.random()*6)+1).toString();//* gera Id Aleatorio ate numero 6 *//
  }
}

const library = new Library();

const book1: Book = {
  id: "", 
  title: 'Jurassic Park',
  author: 'Michael Crichton',
  genre: BookGenre.Fiction,
  available: true
};

const book2: Book = {
  id: "", 
  title: 'Som da Liberdade',
  author: 'Angel Studio',
  genre: BookGenre.NonFiction,
  available: false
};

const book3: Book = {
  id: "",
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

console.log(library.empresarLivro(book1.id!)); 
console.log(library.empresarLivro(book1.id!)); 

console.log(library.devolucaoLivro(book1.id!)); 
console.log(library.devolucaoLivro(book1.id!)); 

console.log(library.librosDisponiveis());

console.log(library.venderLivro(book2.id!)); 
console.log(library.librosDisponiveis()); 
