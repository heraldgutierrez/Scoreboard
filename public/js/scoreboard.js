$(document).ready(function() {
	var homeScore = 0;
	var awayScore = 0;
	
	var homeFoul = 0;
	var awayFoul = 0;
	var maxFouls = 5;
	$('#home_bonus').hide();
	$('#away_bonus').hide();

	var count = 20 * 60;
	setTimer(count);
	var timerStopped = true;

	var shotclock = 24;
	var shotclockStopped = true;

	var to_timer;
	var to_counter;
	var half = 30;		// half timeout in seconds
	var full = 60;		// full timeout in seconds
	var home_half, home_full, away_half, away_full;

	resetSettings();

	var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
	var sc_counter = setInterval(shotclock_timer, 1000);

	function resetSettings() {
		// set timer
		timerStopped = true;

		// set shotclock
		shotclock = 24;
		shotclockStopped = true;
		$('#shotclock').html(shotclock);

		// set timeouts
		home_half = 3;
		home_full = 3;
		away_half = 3;
		away_full = 3;
		$('#home_timeout_half_count').html(home_half);
		$('#home_timeout_full_count').html(home_full);
		$('#away_timeout_half_count').html(away_half);
		$('#away_timeout_full_count').html(away_full);

		// set fouls
		homeFoul = 0;
		awayFoul = 0;
		$('#home_foul_count').html(homeFoul);
		$('#away_foul_count').html(awayFoul);
		$('#home_bonus').hide();
		$('#away_bonus').hide();
	}

	function timer()
	{
		if(timerStopped == false) {
		  	count--;
		  	if (count < 0) {
		     	// clearInterval(counter);
		     	//counter ended, do something here

		     	$('#start_timer').show();
		     	$('#stop_timer').hide();
		     	disableButtons(false);
		     	resetSettings();
		     	return;
		  	}

		  	setTimer(count);
		}
	}

	function shotclock_timer() {
		if(shotclockStopped == false) {
		  	shotclock--;
		  	if(shotclock == 0) {
		  		shotclockStopped = true;
		  	}
		  	$('#shotclock').html(shotclock);
		}
	}

	$('#to_container').hide();
	// $('#bonus_home').hide();
	// $('#bonus_away').hide();

	// home buttons
	$('#change_home_team').click(function() {
		$('#label_home_team').html('Home: ' + $('#input_home_team').val());
		$('#input_home_team').val('');
	});
	$('#home_team_select').change(function() {
		$('#home_team_label').html('Home: ' + $(this).val());
	});
	$('#home_add_point').click(function() { 
		homeScore++; 
		$('#home_score').html(homeScore);
	});
	$('#home_remove_point').click(function() { 
		if(homeScore > 0)
			homeScore--; 
		$('#home_score').html(homeScore);
	});

	// away buttons
	$('#away_team_select').change(function() {
		$('#away_team_label').html('Visitor: ' + $(this).val());
	});
	$('#away_add_point').click(function() { 
		awayScore++; 
		$('#away_score').html(awayScore);
	});
	$('#away_remove_point').click(function() { 
		if(awayScore > 0) 
			awayScore--; 
		$('#away_score').html(awayScore);
	});

	// timer buttons
	$('#home_timeout').hide();
	$('#away_timeout').hide();
	$('#stop_timer').hide();

	$('#start_timer').click(function() { 
		timerStopped = false;
		shotclockStopped = false;
		$(this).hide();
		$('#stop_timer').show();
		$('#change_time').attr('disabled', true);
	});
	$('#stop_timer').click(function() { 
		timerStopped = true; 
		shotclockStopped = true;
		$(this).hide();
		$('#start_timer').show();
		$('#change_time').attr('disabled', false);
	});

	$('#change_time').click(function() {
		var mins = $('#mins').val() == '' ? 0 : parseInt($('#mins').val());
		var secs = $('#secs').val() == '' ? 0 : parseInt($('#secs').val());

		if(mins != 0 || secs != 0) {
			mins *= 60;
			count = mins + secs;
			setTimer(count);

			$('#mins').val('');
			$('#secs').val('');
		}
	});

	$('#reset_sc').click(function() {
		if(!timerStopped)
			shotclockStopped = false;
		shotclock = 24;
		$('#shotclock').html(shotclock);
	});

	////////////////////////////////////////
	// timeout
	////////////////////////////////////////
	$('#home_timeout_half').click(function() { 
		home_half--;
		$('#home_timeout_half_count').html(home_half);
		setTimeOut(true, half); 
	});
	
	$('#home_timeout_full').click(function() { 
		home_full--;
		$('#home_timeout_full_count').html(home_full);
		setTimeOut(true, full); 
	});
	
	$('#away_timeout_half').click(function() { 
		away_half--;
		$('#away_timeout_half_count').html(away_half);
		setTimeOut(false, half); 
	});
	
	$('#away_timeout_full').click(function() { 
		away_full--;
		$('#away_timeout_full_count').html(away_full);
		setTimeOut(false, full); 
	});


	////////////////////////////////////////
	// foul
	////////////////////////////////////////
	$('#home_foul').click(function() {
		homeFoul++;
		$('#home_foul_count').html(homeFoul);

		if(homeFoul > maxFouls)
			$('#home_bonus').show();
	});

	$('#home_reset_foul_count').click(function() {
		resetHomeFoulCount();
	});

	function resetHomeFoulCount() {
		homeFoul = 0;
		$('#home_foul_count').html(homeFoul);
		$('#home_bonus').hide();
	}

	$('#away_foul').click(function() {
		awayFoul++;
		$('#away_foul_count').html(awayFoul);

		if(awayFoul > maxFouls)
			$('#away_bonus').show();
	});

	$('#away_reset_foul_count').click(function() {
		resetAwayFoulCount();
	});

	function resetAwayFoulCount() {
		awayFoul = 0;
		$('#away_foul_count').html(awayFoul);
		$('#away_bonus').hide();
	}







	function setTimeOut(who, time) {
		disableButtons(true);
		$('#stop_timer').hide();
		$('#start_timer').show();
		if(who)
			$('#home_timeout').show();
		else
			$('#away_timeout').show();


		timerStopped = true; 
		shotclockStopped = true;

		$('#to_container').show();

		to_timer = time;
		$('#timer_to').html(to_timer);

		to_counter = setInterval(timeout_timer, 1000);
	}

	function timeout_timer() {
		to_timer--;
	  	if(to_timer < 0) {
	  		clearInterval(to_counter);
	  		$('#to_container').hide();
	  		disableButtons(false);
	  		$('#home_timeout').hide();
			$('#away_timeout').hide();

			if(home_half < 1) 
				$('#home_timeout_half').attr('disabled', true);
			
			if(home_full < 1)
				$('#home_timeout_full').attr('disabled', true);

			if(away_half < 1) 
				$('#away_timeout_half').attr('disabled', true);
			
			if(away_full < 1)
				$('#away_timeout_full').attr('disabled', true);

	     	return;
	  	}
	  	$('#timer_to').html(to_timer);
	}



	$('#changeSkin').click(function() {
		if($('body').hasClass('dark')) {
			$('body').removeClass('dark');
			$('#scoreboard').removeClass('darkTable');
		} else {
			$('body').addClass('dark');
			$('#scoreboard').addClass('darkTable');
		}
	});
});

function setTimer(count) {
	var mins = parseInt(count / 60);
	var secs = parseInt(count % 60);// == 0 ? '00' : parseInt(count % 60);
	mins = (mins > 9) ? mins : ('0' + mins);
	secs = (secs > 9) ? secs : ('0' + secs);
	$('#timer').html(mins + ':' + secs);
}

function disableButtons(setting) {
	$('button').attr('disabled', setting);
}