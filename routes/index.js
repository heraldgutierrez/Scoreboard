
/*
 * GET home page.
 */

exports.index = function(req, res){
	// res.render('scoreboard_led');
	res.redirect('http://heraldgutierrez.com/Portfolio/Scoreboard');
};

exports.scoreboard = function(req, res) {
	res.render('scoreboard');
};

exports.ledscoreboard = function(req, res) {
	res.render('scoreboard_led');
};

exports.archiekat = function(req, res) {
	res.render('archiekat');
};