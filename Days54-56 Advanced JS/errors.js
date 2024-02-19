const fs = require('fs');

// USING TRY AND CATCH
// Purpose of using try and catch is that in the event of an error in the code, without using try / catch, the execution would stop and the program would crash. In order to
// prevent this, using the "try" is where you place the code and if it does not work properly, the catch will occur but the code would also continue to execute passed the 
// error point 
function readFile() {
    try {

        const fileData = fs.readFileSync('data.json')
    }
    catch {
        console.log('An error occured')
    }
    console.log("hi there!");
}

readFile()