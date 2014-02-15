var SB;

module.exports = function(io) {
	var routes = {};

	routes.ledSimpleScoreboard = function(req, res) {
		SB = {
			homeTeam 	: '',
			homeScore 	: 0,
			awayTeam 	: '',
			awayScore 	: 0,
			timer 		: 60,
			timerStopped : false
		};
		res.render('led_simple');
	};

	routes.ledSimpleScoreboardControls = function(req, res) {
		res.render('led_simple_controller');
	};

	io.sockets.on('connection', function (socket) {
		socket.on('changeTeam', function(data) {
			// console.log('changing team name');
			if(data.who) {
				SB.homeTeam = data.name;
				io.sockets.emit('updateName', true, SB.homeTeam);
			} else {
				SB.awayTeam = data.name;
				io.sockets.emit('updateName', false, SB.awayTeam);
			}
		});

		socket.on('addPoints', function(data) {
			// console.log('adding points');
			var home = data.who;
			var points = data.points;

			if(home) {
				SB.homeScore += points;
				io.sockets.emit('updateScore', true, SB.homeScore);
			} else {
				SB.awayScore += points;
				io.sockets.emit('updateScore', false, SB.awayScore);
			}
		});

		socket.on('startTimer', function() {
			// console.log('start timer');
			io.sockets.emit('doStartTimer');
		});

		socket.on('stopTimer', function() {
			// console.log('stop timer');
			io.sockets.emit('doStopTimer');
		});

		socket.on('changeTime', function(data) {
			io.sockets.emit('doChangeTime', data.time);
		});
	});

	return routes;
};