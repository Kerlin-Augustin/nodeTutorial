const express = require('express');
const morgan = require('morgan');

// express app

const app = express();

// register view engine

app.set('view engine', 'ejs');

// listen for requests

app.listen(3000);

// middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));

// app.use((req,res, next) => {
//     console.log('new request made: ' + req.url);
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

app.get('/', (req, res) => {
    // res.send('<h1>Home</h1>');
    res.render('index', {title: 'Home'});
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

// app.use((req, res, next) => {
//     res.status(404).render('404');
//     next();
// })