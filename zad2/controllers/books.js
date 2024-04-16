const Book = require("../models/book");

const dummyBook = new Book(1, '1984', 2004, 1);

const books = [dummyBook];

const getBookList = (_, res) => {
    res.render('books', { books });
}

module.exports = {
    getBookList,
}
