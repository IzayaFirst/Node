exports.render = function(req , res){
    res.render('index', {
      'title' : 'Hello world',
      'message' : 'Hello Jade'
    });
}
