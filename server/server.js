const http = require('http');

// fs is file system. This is a node module that allows us to read and write files.
const fs = require('fs')

const _ = require('lodash')

// the createServer method creates a http server object

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // redirect! This redirects to the about page. If we previously had a about-me page that we changed to about this allows external links to go to the about page.
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            // since we are not sending multiple files we could just condense this code down and pass in the data object directly to the res.end() method and it will work the same as passing in the data object to ther res.write method.

            // res.write(data);
            res.end(data);
        }
    })
   
});

// We are listening for requests here. 3000 is the port number, localhost is where it will listen to you request (note that the localhost arguement is optional if you don't put it it will be localhost by default, and the last arguemnet is a callback function to fire the server up.) Localhost is pointing to a ip address that is pointing to our own computer.

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})
