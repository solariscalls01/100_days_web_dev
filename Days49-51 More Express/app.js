const express = require ('express')
const app = express()
const path = require('path')
app.use(express.urlencoded())

// anything that is considered a "static page that does not require any dynamic changes will require the express.static method"
// Since we need to load our CSS and JS files, we need to use this method and parameter is the folder that these files will be stored in. 
app.use(express.static('public'))


const PORT = 3001



app.get('/', (req,res) => {
    // Another way to send a file and match pathways
    res.sendFile(__dirname + '/views/index.html')
}) 

app.get('/about', (req,res) => {
    let filePath = path.join(__dirname, 'views', 'about.html')
    res.sendFile(filePath)
})

app.get('/recommend', (req,res) => {
    let filePath = path.join(__dirname, 'views', 'recommend.html')
    res.sendFile(filePath)
})

app.get('/restaurants', (req,res) => {
    let filePath = path.join(__dirname, 'views', 'restaurants.html')
    res.sendFile(filePath)
})

app.get('/confirm', (req,res) => {
    res.sendFile(__dirname + "/views/confirm.html")
})


app.listen(PORT)
console.log('Listening on ' + PORT)

