const http = require('http')

PORT = 3000

function handleRequest(req,res) {
    
    
    // localhost:3000/currenttime
    // how to request the current time
    // create a new object Date
    if (req.url === '/currenttime') {
        res.statusCode = 200;
        res.end('<h1>' + new Date().toLocaleDateString() + '</h1>\n'
        + '<h2>Time:' + new Date().toLocaleTimeString() + '</h2>' )
    }
    else if (req.url === "/") {
        res.statusCode = 200;
        res.end('<h1>Hello World</h1>');
    }

        // localhost:3000/
}

const server = http.createServer(handleRequest)


// within the listen method, a port is generally added. e.g.., listen(80) , listen(443)
server.listen(PORT)
console.log(`'Currently listening on Port: ${PORT}'`)