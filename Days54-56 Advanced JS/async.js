// asynchronous tasks. 

const fs = require('fs');

// ASYNC data just basically means that things run asynchronously. The file data in this example takes time to parse and as a ersult, the "hi there" will be printed first
// once the filedata is parsed from the readFile() method, it will print the items inside
function readFile() {
    let fileData;

    fileData = fs.readFile('data.txt', (error, fileData) =>{
        console.log("file parased")
        console.log(fileData.toString())
    })
    console.log("hi there!");
}

readFile()