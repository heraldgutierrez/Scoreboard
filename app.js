
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// routes
var routes = require('./routes');

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 5000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

// development only
app.configure('development', function() {
	app.use(express.errorHandler());
});

// configure socket.io
io.configure(function () { 
	io.set('log level', 1); 				// reduce logging

	// web sockets for heroku
	io.set("transports", ["xhr-polling"]); 
	io.set("polling duration", 10); 
});


/*********************************************************
**********************************************************
*
*	HTML pages/handlers
*
*********************************************************
*********************************************************/

app.get('/', routes.index);
app.get('/Scoreboard', routes.scoreboard);
app.get('/LED_Scoreboard', routes.ledscoreboard);
app.get('/LED_Scoreboard_v2', routes.ledscoreboard2);

server.listen(app.get('port'), function() {
// http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

