exports.login = function(req ,res){
  //console.log(req.body);
  //console.log(req.body.username);
  //console.log(req.body.password);
  res.render('index' , {
    title : 'Login as '+req.body.username ,
    message : 'Hello mr. '+req.body.username,
    isLoggedIn: true
  });
}

exports.logout = function(req , res){
  res.render('index' , {
    isLoggedIn: false,
    title : 'You are logout complete',
    message : 'Thank you , Have a nice day'
  });
}
