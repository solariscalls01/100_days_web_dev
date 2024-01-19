// Express is technically a function so need to again set the app variable to match the express function
const express = require('express')
const app = express()

PORT = 3000

// The Overall Idea behind .get is that it creates various pathways for us to use. Instead of the previous module where we had a bunch of 
// "if URL = someURL, THEN send the response" 


// the get request handles that will be sent from the server (The Request / Response is AKA Routes or Route Handlers)
// The first parameter sets the path, the 2nd parameter is the function.
// In this case, we can use various ways, but in this example we will use the anonomyous function (no variable created)
app.get("/currenttime", function(req, res) {
    res.send('<h1>' + new Date().toLocaleDateString() + '</h1>\n'
    + '<h2>Time:' + new Date().toLocaleTimeString() + '</h2>' )
} )

// Using the arrow function method
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT)
console.log('Listening on ' + PORT)