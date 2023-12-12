
const fs = require ('fs')

// using the ES6 formatting for annonymous function, we're creating a request eventhandler. We need to export this in order for app.js to connect
const requestHandler = (req,res) => {
    
    // this just simply logs the url, method, and headers for the request
     console.log(req.url, req.method, req.headers)

    const url = req.url     // get the current URL and set that to URL variable
    const method = req.method // gets the method type for the request (e.g., GET / POST)
    if (url === '/') {

        // This allows us to write some data to the response. We are directly writing an html barebones with a simple message that will be sent from the server. 
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();        //res.end just simply "ends" the transmission or code segment. similar to just a simple return statement in a function. 
    }
    
     // conditional where if the URL is message (from the form action portion while matching the method = POST, then it will write/ send back the following html snippit)
    if (url === '/message' && method === 'POST') {
        console.log("this is working")
        const body = [];    // create an empty array to store some new data into this array
        req.on("data", (chunk) => {     // this code is the "listener event". It listens for the event in this case "data" will be fired when a new chunk of data is ready to be read. 2nd parameter requires a function. Our variable we just named "chunk" but can be anything. 
            console.log(chunk);
            body.push(chunk);
            console.log(body)
        });
    
        req.on('end', () => {   // the "end" is executed after all the files have been parsed. 
            console.log("this part is running")
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];       // split the message from the "name=" segment and gets the index of those values (in our case its the [1]) and uses the split method
    
            // the fs is filesystem and we are writing a file and creating a message.text file, 2nd parameter adds the line/code/message or whatever you want to write into the message.text file
            fs.writeFileSync('message.text', message, error => {      // 3rd parameter accepts an error function IF there is an error 
                res.statusCode = 302        // the 302 is the "redirect" status code and the location redirects us to where we want to go. In this case, we are redirecting back to the home page.
                res.setHeader('Location', "/")       // Location indicates the target of a redirection or the URL of a newly created resource.
                return res.end();
            });
        });
    
    
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hello</title></head>')
        res.write('<body><h1>Hello from JS server</h1></body>')
        res.write('</html>')
        return res.end();  // this ends the response section
    }
}

// various ways to export a function. This uses the module.export method and you just need to = followed by name of function
module.export = requestHandler


// this one omits the module, but need to include a method name. our example is the .handle followed by = function name
exports.handle = requestHandler