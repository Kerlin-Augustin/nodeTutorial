const express = require('express');

// express app

const app = express();

// register view engine

app.set('view engine', 'ejs');

// listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>Home</h1>');
    res.render('index');
})

app.get('/about', (req, res) => {
    // res.send('<h1>About</h1>');
    res.render('about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// })

// 404 page

app.use((req, res) => {
    res.status(404).render('404');
})