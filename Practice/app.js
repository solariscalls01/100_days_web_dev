
// The require statements simply import the modules "http" and "fs" (filesystem) which can be used for their modules. 
const http = require ('http')

// importing from the routes.js file
const routes = require ('./routes')

const server = http.createServer(routes.handle);

server.listen(3020)