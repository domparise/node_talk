var http = require('http') // load the http module

http.createServer(function (req, res) { // asynchonously function on the request and response 

    res.writeHead(200, {'Content-Type': 'text/plain'})  // tell the response we're sending text

    res.end('Hello World\n') // send some text

}).listen(1337, '127.0.0.1') // expose our server to the internet

console.log('Server running at http://127.0.0.1:1337/') // tell us when you're good to go