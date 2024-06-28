const http = require('http');

// the createServer method creates a http server object

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel stylesheet="" href="#"></head>');
    res.write('<p>hello world</p>');
    res.write('<p>hello world, again</p>');
    res.end();
});

// We are listening for requests here. 3000 is the port number, localhost is where it will listen to you request (note that the localhost arguement is optional if you don't put it it will be localhost by default, and the last arguemnet is a callback function to fire the server up.) Localhost is pointing to a ip address that is pointing to our own computer.

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})
