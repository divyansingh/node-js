const fs = require('fs')
// fs.writeFile("text.txt", "hello world", function (err){
//     if (err) {
//         throw err;
//     } else {
//         console.log("write is completed")
//     }
// })
fs.appendFile("text.txt", "\nhello again", function (err){
    if (err) {
        throw err;
    } else {
        console.log("write operation is completed")
    }
})
