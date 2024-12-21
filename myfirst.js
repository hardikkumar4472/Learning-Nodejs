var http=require('http');
var http=require('./myfirstmodule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World');
}).listen(8080);