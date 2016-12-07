function prefix(pre){
    return function fileHandler(err , data){
      console.log(pre+' '+data);
    }
}

    var fs =require('fs');
    var fileHandler = prefix('This is');
    fs.readFile('data.txt' , fileHandler);
