var fs = require('fs');
fs.readFile('Hello.txt' , function(err , data){
    console.log(data.toString());
});
console.log('Hello world');
