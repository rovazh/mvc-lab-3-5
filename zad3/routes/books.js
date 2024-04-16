const router = require('express').Router();
const {getBookList, getAddBook, postAddBook, deleteBook} = require('../controllers/books');

router.get('/book/list', getBookList);
router.get('/book/add', getAddBook);
router.post('/book/add', postAddBook);
router.post('/book/delete/:id', deleteBook);

module.exports = router;
