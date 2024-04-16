const router = require('express').Router();
const {getBookList, getAddBook, postAddBook, deleteBook, getBook} = require('../controllers/books');

router.get('/book/list', getBookList);
router.get('/book/add', getAddBook);
router.post('/book/add', postAddBook);
router.post('/book/delete/:id', deleteBook);
router.get('/book/:id', getBook);

module.exports = router;
