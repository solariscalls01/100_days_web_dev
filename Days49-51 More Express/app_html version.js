const express = require ('express')
const { get } = require('http')
const app = express()
const path = require('path')
const fs = require ('fs')

app.use(express.urlencoded({extended: false}))

// This section tells node where to find the files for templating. In this case since our html is in the views folder, we set this to views. The 2nd parameter needs to find the path
// that the files will be located/ connected. 
app.set('views', path.join(__dirname, 'views'))

// the app.set allows us to use templating in node. the first parameter is the template string to set the view engine to EJS 'view engine'. 
// the 2nd parameter is the engine that we are using; in this case the ejs engine.
app.set('view engine', 'ejs')

// anything that is considered a "static page that does not require any dynamic changes will require the express.static method"
// Since we need to load our CSS and JS files, we need to use this method and parameter is the folder that these files will be stored in. 
app.use(express.static('public'))

// IN ORDER TO PROPERLY UTILIZE THE EJS TEMPLATE, WE NEED TO RENAME THE HTML FILES WITH THE .ejs 
// ALSO NEED TO CHANGE THE app.get with res.render

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

// When adding post, the pathway apparently does not matter. 
app.post('/recommend', (req, res) => {
    // the variables in here are created to read/ write data to a JSON file. The parse method automatically creates the form in readable JSON format (dictionary format)
    let dataFilePath = path.join(__dirname, 'data', 'restaurants.json')
    let restaurant = req.body;


    let fileData = fs.readFileSync(dataFilePath)
    const restaurantData = JSON.parse(fileData)

    // Push the form information into the JSON file
    restaurantData.push(restaurant);
    fs.writeFileSync(dataFilePath, JSON.stringify(restaurantData))

    // Using the redirect method to essentially take us to whatever page we want to be redirected to. In this case, after a user submits the form, 
    //  we will be redirected to the confirm.html page
    res.redirect("/confirm")

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

