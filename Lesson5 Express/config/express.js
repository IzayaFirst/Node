var express = require('express');
var bodyParser = require('body-parser');// Parse HTML BODY
module.exports = function(){


  var app = express();
    app.set('views' , './app/views');
    app.set('view engine' , 'jade');
    app.use(bodyParser.urlencoded({
      extended : true
    }));
    app.use(bodyParser.json());
  require('../app/routes/index.routes')(app);
  require('../app/routes/user.route')(app);
  app.use(express.static('./public'));
  return app;
}
