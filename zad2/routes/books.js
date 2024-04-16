const router = require('express').Router();
const {getBookList} = require('../controllers/books');

router.get('/book/list', getBookList)

module.exports = router;
