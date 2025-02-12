"use strict";
var BookGenre;
(function (BookGenre) {
    BookGenre["Fiction"] = "fiction";
    BookGenre["NonFiction"] = "non-Fiction";
    BookGenre["Suspense"] = "suspense";
    BookGenre["Mystery"] = "mystery";
})(BookGenre || (BookGenre = {}));
class Library {
    constructor() {
        this.books = [];
    }
    // Add a book with an optional id, generate a random id if not provided
    addLivro(book) {
        if (!book.id) {
            book.id = this.generateId();
        }
        this.books.push(book);
    }
    // Search books by title or author (case-insensitive)
    buscarLivro(query) {
        const result = [];
        for (let book of this.books) {
            if (book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase())) {
                result.push(book);
            }
        }
        return result;
    }
    // Lend a book by ID
    empresarLivro(bookId) {
        const book = this.books.find((book) => book.id === bookId);
        if (!book) {
            return 'Livro não encontrado.';
        }
        if (book.available) {
            book.available = false;
            return 'Livro emprestado com sucesso!';
        }
        else {
            return 'O livro não está disponível.';
        }
    }
    // Return a book by ID
    devolucaoLivro(bookId) {
        const book = this.books.find((book) => book.id === bookId);
        if (!book) {
            return 'Livro não encontrado.';
        }
        if (!book.available) {
            book.available = true;
            return 'Livro devolvido com sucesso!';
        }
        else {
            return 'Este livro já está disponível.';
        }
    }
    // Get available books
    librosDisponiveis() {
        const availableBooks = [];
        for (let book of this.books) {
            if (book.available) {
                availableBooks.push(book);
            }
        }
        return availableBooks;
    }
    // Remove a book by ID (sell the book)
    venderLivro(bookId) {
        const index = this.books.findIndex((book) => book.id === bookId);
        if (index === -1) {
            return 'Livro não encontrado para venda.';
        }
        this.books.splice(index, 1);
        return 'Livro vendido com sucesso!';
    }
    // Helper function to generate a random ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
}
// Create the library instance
const library = new Library();
// Add books to the library
const book1 = {
    id: "", // ID will be generated automatically
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    genre: BookGenre.Fiction,
    available: true
};
const book2 = {
    id: "", // ID will be generated automatically
    title: 'Som da Liberdade',
    author: 'Angel Studio',
    genre: BookGenre.NonFiction,
    available: false
};
const book3 = {
    id: "", // ID will be generated automatically
    title: 'Indiana Jones',
    author: 'George Lucas',
    genre: BookGenre.Suspense,
    available: true
};
library.addLivro(book1);
library.addLivro(book2);
library.addLivro(book3);
// Test cases
console.log(library.buscarLivro('Jurassic'));
console.log(library.buscarLivro('Michael Crichton'));
// Try lending and returning books
console.log(library.empresarLivro(book1.id));
console.log(library.empresarLivro(book1.id));
console.log(library.devolucaoLivro(book1.id));
console.log(library.devolucaoLivro(book1.id));
// List available books
console.log(library.librosDisponiveis());
// Sell a book (remove from the list)
console.log(library.venderLivro(book2.id));
console.log(library.librosDisponiveis());
