const express = require('express');

// express app

const app = express();

// listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})