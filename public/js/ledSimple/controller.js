var HOME = 'home';
var HOME_SCORE = 0;
var AWAY = 'away';
var AWAY_SCORE = 0;

var TIMER;
var TIMER_STOPPED = true;

$(document).ready(function(){
	// need to get the ID so we only update this clients page,
	// not every client viewing the page
	var pathnameID = ($(location).attr('pathname')).replace(/\//, '');

	// need to get url for socket.io
	var url = $(location).attr('origin');
	var socket = io.connect(url);

	$('#stop_timer').hide();
	socket.on('updateScore', function(who, points) { 
		updateScore(who, points); 
	});


	/*****************************************
		Home Controls
	*****************************************/
	// Change Team Names
	$('#home_team_select').change(function() { socket.emit('changeTeam', { who : true, name : $(this).val() }); });

	// Home Points
	$('#home_add_point_1').click(function() { socket.emit('addPoints', { who : true, points : 1 }); });
	$('#home_add_point_2').click(function() { socket.emit('addPoints', { who : true, points : 2 }); });
	$('#home_add_point_3').click(function() { socket.emit('addPoints', { who : true, points : 3 }); });
	$('#home_remove_point').click(function() { socket.emit('addPoints', { who : true, points : -1 }); });

	/*****************************************
		Away Controls
	*****************************************/
	// Change Team Names
	$('#away_team_select').change(function() { socket.emit('changeTeam', { who : false, name : $(this).val() }); });

	// Away Points
	$('#away_add_point_1').click(function() { socket.emit('addPoints', { who : false, points : 1 }); });
	$('#away_add_point_2').click(function() { socket.emit('addPoints', { who : false, points : 2 }); });
	$('#away_add_point_3').click(function() { socket.emit('addPoints', { who : false, points : 3 }); });
	$('#away_remove_point').click(function() { socket.emit('addPoints', { who : false, points : -1 }); });

	/*****************************************
		Center Controls
	*****************************************/
	// Timer
	$('#start_timer').click(function() { 
		$(this).hide();
		$('#stop_timer').show();
		$('#change_time').attr('disabled', true);

		socket.emit('startTimer');
	});

	$('#stop_timer').click(function() { 
		$(this).hide();
		$('#start_timer').show();
		$('#change_time').attr('disabled', false);

		socket.emit('stopTimer');
	});

	$('#change_time').click(function() {
		var mins = $('#mins').val() == '' ? 0 : parseInt($('#mins').val());
		var secs = $('#secs').val() == '' ? 0 : parseInt($('#secs').val());
		var time;

		if(mins != 0 || secs != 0) {
			mins *= 60;
			time = mins + secs;

			socket.emit('changeTime', { time : time });

			$('#mins').val('');
			$('#secs').val('');
		}
	});
});

// Update the Score:
// - who: who to update, Home or Away
function updateScore(forHome, points) {
	if(forHome) 
		$('#home_score').html(points);
	else
		$('#away_score').html(points);
}
