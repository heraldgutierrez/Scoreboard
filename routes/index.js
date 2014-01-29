
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('scoreboard_led');
};

exports.scoreboard = function(req, res) {
	res.render('scoreboard');
};

exports.ledscoreboard = function(req, res) {
	res.render('scoreboard_led');
};

exports.ledscoreboard2 = function(req, res) {
	res.render('scoreboard_led_v2');
};