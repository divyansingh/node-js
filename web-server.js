const http = require('http')
// console.log(http)
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.end("<h1>Hello World</h1>")
}).listen(1234)