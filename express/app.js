const express = require('express');

// express app

const app = express();

// listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>Home</h1>');
    res.sendFile('/Users/kerlinaugustin/Desktop/nodeTutorial/server/views/index.html')
})

app.get('/about', (req, res) => {
    // res.send('<h1>About</h1>');
    res.sendFile('/Users/kerlinaugustin/Desktop/nodeTutorial/server/views/about.html')
})

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

// 404 page

app.use((req, res) => {
    res.status(404).sendFile('/Users/kerlinaugustin/Desktop/nodeTutorial/server/views/404.html')
})