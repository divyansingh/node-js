const fs = require('fs')
console.log("first")
fs.readFile("textfile.txt", function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString())
})
console.log("Third line of code") //is executed first before loop due to asynchronous

//Asynchrousnous way od accesing data

console.log("first    ync")

console.log(fs.readFileSync("textfile.txt", "utf-8"))

console.log("Third line of code    ync") //is executed first before loop due to asynchronous


















