const Book = require("../models/book");

let lastBookId = 1;

const dummyBook = new Book(lastBookId, '1984', 2004, 1);

const books = [dummyBook];

const getBookList = (_, res) => {
    res.render('books', { books });
}

const getAddBook = (_, res) => {
    res.render('add-book');
}

const postAddBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    lastBookId++;
    const book = new Book(lastBookId, title, publishingYear, authorId);
    books.push(book);
    return res.redirect('/book/list');
}

const deleteBook = (req, res) => {
    const index = books.findIndex((book) => book.id == +req.params.id);
    if (index !== -1) {
        books.splice(index, 1);
    }
    return res.redirect('/book/list');
}

const getBook = (req, res) => {
    const index = books.findIndex((book) => book.id == +req.params.id);
    if (index !== -1) {
        return res.render('book', { book: books[index] });
    }
}

module.exports = {
    getBookList,
    getAddBook,
    postAddBook,
    deleteBook,
    getBook,
}
