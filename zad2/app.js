const express = require('express');
const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(homeRouter);
app.use(booksRouter);
app.use(authorsRouter);

app.use((_, res) => {
    res.status(404).end('Not Found');
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
