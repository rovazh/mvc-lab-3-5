const router = require('express').Router();

const {getAuthorList} = require('../controllers/authors');

router.get('/author/list', getAuthorList)

module.exports = router;
