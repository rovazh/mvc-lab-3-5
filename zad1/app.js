const express = require('express');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    res.status(200).end('In progress..');
});
app.use((_, res) => {
    res.status(404).end('Not Found');
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
