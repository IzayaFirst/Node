var http = require('http');
var connect = require('connect')
var app = connect();


app.use(function(req , res , next){
  console.log(req.method , req.url);
  next();
});

app.use(function(req , res , next){
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello world')
});

app.listen(3000);
console.log('Server on port 3000');
