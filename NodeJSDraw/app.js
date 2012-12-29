
// 1. Express requires these dependencies
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// 2. Configure our application
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

// 3. Configure error handling
app.configure('development', function(){
  app.use(express.errorHandler());
});

// 4. Setup Routes
app.get('/', routes.index);
app.get('/users', user.list);

// 5. Enable Socket.io
var server = http.createServer(app).listen( app.get('port') );
var io = require('socket.io').listen(server, function() {
  console.log("Express server listening on port " + app.get('port'));
});