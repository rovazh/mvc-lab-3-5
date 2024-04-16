const Author = require("../models/author");

const dummyAuthor = new Author(1, 'George Orwell');

const authors = [dummyAuthor];

const getAuthorList = (_, res) => {
    res.render('authors', { authors })
}

module.exports = {
    getAuthorList,
}
