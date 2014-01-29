var counter = 0;
var small_numbers = [
		[2, 3, 4, 6, 10, 11, 14, 15, 16, 18, 20, 21, 22, 25, 26, 30, 32, 33, 34], 	// 0
		[2, 3, 8, 13, 18, 23, 28, 32, 33, 34], 										// 1
		[2, 3, 4, 6, 10, 15, 19, 23, 27, 31, 32, 33, 34, 35], 						// 2
		[2, 3, 4, 6, 10, 15, 19, 25, 26, 30, 32, 33, 34],							// 3
		[4, 8, 9, 12, 14, 16, 19, 21, 22, 23, 24, 25, 29, 34],						// 4
		[1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 20, 25, 26, 30, 32, 33, 34],				// 5
		[2, 3, 4, 6, 10, 11, 16, 17, 18, 19, 21, 25, 26, 30, 32, 33, 34],			// 6
		[1, 2, 3, 4, 5, 10, 14, 18, 23, 28, 33],									// 7
		[2, 3, 4, 6, 10, 11, 15, 17, 18, 19, 21, 25, 26, 30, 32, 33, 34],			// 8
		[2, 3, 4, 6, 10, 11, 15, 17, 18, 19, 20, 25, 26, 30, 32, 33, 34]			// 9
	];

$(document).ready(function(){
	

	// for(var i = 0; i < small_numbers.length; i++) {
	// 	onLED(i, small_numbers[i]);
	// }
	test();

});

function test() {
	var sc_counter = setInterval(shotclock_timer, 1000);
	
	var one = 0;
	var ten = 0;
	var hundred = 0;
	var thousand = 0;
	var ten_thousand = 0;
	var hundred_thousand = 0;
	var million = 0;
	var ten_million = 0;
	var hundred_million = 0;
	var billion = 0;

	for(var i = 0; i < 9; i++) {
		$('#' + i).hide();
	}

	// onLED(0, small_numbers[billion]);
	// onLED(1, small_numbers[hundred_million]);
	// onLED(2, small_numbers[ten_million]);
	// onLED(3, small_numbers[million]);
	// onLED(4, small_numbers[hundred_thousand]);
	// onLED(5, small_numbers[ten_thousand]);
	// onLED(6, small_numbers[thousand]);
	// onLED(7, small_numbers[hundred]);
	// onLED(8, small_numbers[ten]);
	// onLED(9, small_numbers[one]);
}

function shotclock_timer() {
	counter++;
	one = counter % 10;
	ten = Math.floor(counter / 10) % 10;
	hundred = (Math.floor(counter / 100) % 1000) % 10;
	thousand = (Math.floor(counter / 1000) % 1000) % 10;
	ten_thousand = (Math.floor(counter / 10000) % 10000) % 10;
	hundred_thousand = (Math.floor(counter / 100000) % 100000) % 10;
	million = (Math.floor(counter / 1000000) % 1000000) % 10;
	ten_million = (Math.floor(counter / 10000000) % 10000000) % 10;
	hundred_million = (Math.floor(counter / 100000000) % 100000000) % 10;
	billion = (Math.floor(counter / 1000000000) % 1000000000) % 10;

	// var html = one + '<br>';
	// html += ten + '<br>';
	// html += hundred + '<br>';
	// html += thousand + '<br>';
	// html += ten_thousand + '<br>';
	// html += hundred_thousand + '<br>';
	// html += million + '<br>';
	// html += ten_million + '<br>';
	// html += hundred_million + '<br>';
	// html += billion + '<br>';
	// $('#count').html(html);

	if (billion != 0) {
		showDiv(0);
	}
	if (hundred_million != 0) {
		showDiv(1);
	}
	if (ten_million != 0) {
		showDiv(2);
	}
	if (million != 0) {
		showDiv(3);
	}
	if (hundred_thousand != 0) {
		showDiv(4);
	}
	if (ten_thousand != 0) {
		showDiv(5);
	}
	if (thousand != 0) {
		showDiv(6);
	}
	if (hundred != 0) {
		showDiv(7);
	}
	if (ten != 0) {
		showDiv(8);
	}
	
	onLED(0, small_numbers[billion]);
	onLED(1, small_numbers[hundred_million]);
	onLED(2, small_numbers[ten_million]);
	onLED(3, small_numbers[million]);
	onLED(4, small_numbers[hundred_thousand]);
	onLED(5, small_numbers[ten_thousand]);
	onLED(6, small_numbers[thousand]);
	onLED(7, small_numbers[hundred]);
	onLED(8, small_numbers[ten]);
	onLED(9, small_numbers[one]);
}

function showDiv(id) {
	$('#' + id).show();
}

function onLED (id, array) {
	$('#' + id + ' .circle').removeClass('on');

	for(var i = 0; i < array.length; i++) {
		$('#' + id + ' .circle:nth-child('+ array[i]+')').addClass('on');
	}
}
