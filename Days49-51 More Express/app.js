const express = require ('express')
const app = express()
app.use(express.urlencoded())

const PORT = 3001



app.get('/', (req,res) => {
    res.sendFile("C:/Users/solar/Desktop/100 Days of web dev/Days49-51 More Express Static & Dynamic Content/frontend-site/index.html")
})


app.listen(PORT)
console.log('Listening on ' + PORT)

