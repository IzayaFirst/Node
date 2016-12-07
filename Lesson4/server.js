var http = require('http');
http.createServer(function(req , res){
  res.end('Hello world');
}).listen(3000);
console.log('Server running on port 3000');
