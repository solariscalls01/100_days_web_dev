const express = require('express')
const app = express()
const fs = require('fs') //filesystem import
const path = require('path') //path package can be useeful for setting filepaths

PORT = 3000

// App.use requires to load the express.urlencoded() to parse the data
app.use(express.urlencoded())

// Creating a simple form. Just for practice, but obviously wouldn't normally do it like this
app.get('/', (req,res) => {
    res.send('<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button type="submit">Submit</button></form>')
})

// The .username was a result from our input tag with the "name". Basically the req.body can request any object from the html page (i believe)
app.post('/store-user', (req,res) => {
    const userName = req.body.username
    console.log(userName)

    // the filepath.join section allows to get the absolute path of the directory
    // This section tells the filesystem WHERE to write the file. 
    // path.join with the __dirname allows for crossplatform file pathing for various OSes, 2nd parameter is the directory, 3rd is the file
    const filePath = path.join(__dirname, 'data', 'users.json')
    
    // Before we can write something to a file, we must first read the file first. 
    const fileData = fs.readFileSync(filePath)
    const existingUsers = JSON.parse(fileData);

    console.log(fileData)
    console.log(existingUsers)

    // push method similar to appending in python
    existingUsers.push(userName);
   
    fs.writeFileSync(filePath, JSON.stringify(existingUsers))
    res.send('<h1>Username Stored!</h1>')
})

app.get("/users", (req,res) => {
    const filePath = path.join(__dirname, 'data', 'users.json')
    
    // Before we can write something to a file, we must first read the file first. 
    const fileData = fs.readFileSync(filePath)
    const existingUsers = JSON.parse(fileData);

    // using a forloop to list all of the items in the users.json file
    let responseData = '<ul>';
    for (const users of existingUsers) {
        responseData += '<li>' + users + '</li>';
    }

    responseData += '</ul>'

    res.send(responseData)
})

app.listen(PORT)
console.log("Listening on " + PORT)