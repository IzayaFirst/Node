var http = require('http');
var connect = require('connect');
var app = connect();

var hello = function(req , res ,next){
  res.end('This is Hello');
}

var Hi = function(req , res ,next){
  res.end('This is Hi');
}

app.use('/Hi' , Hi);
app.use('Hello' , hello);
app.listen(3000);
console.log('Server run on port 3000');
