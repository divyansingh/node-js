var fs= require('fs')
fs.unlink("text.txt",function(){
    console.log("delete completed")
})