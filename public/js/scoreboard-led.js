var SMALL_NUMBERS = [
	[2, 3, 4, 6, 10, 11, 14, 15, 16, 18, 20, 21, 22, 25, 26, 30, 32, 33, 34],
	[2, 3, 8, 13, 18, 23, 28, 32, 33, 34],
	[2, 3, 4, 6, 10, 15, 19, 23, 27, 31, 32, 33, 34, 35],
	[2, 3, 4, 6, 10, 15, 19, 25, 26, 30, 32, 33, 34],
	[4, 8, 9, 12, 14, 16, 19, 21, 22, 23, 24, 25, 29, 34],
	[1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 20, 25, 26, 30, 32, 33, 34],
	[2, 3, 4, 6, 10, 11, 16, 17, 18, 19, 21, 25, 26, 30, 32, 33, 34],
	[1, 2, 3, 4, 5, 10, 14, 18, 23, 28, 33],
	[2, 3, 4, 6, 10, 11, 15, 17, 18, 19, 21, 25, 26, 30, 32, 33, 34],
	[2, 3, 4, 6, 10, 11, 15, 17, 18, 19, 20, 25, 26, 30, 32, 33, 34]
];

var LARGE_NUMBERS = [
	// 0
	[4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 57, 58, 59, 60, 61, 62, 63, 73, 74, 75, 76, 77, 78, 88, 89, 90, 91, 92, 93, 102, 103, 104, 105, 106, 107, 108, 116, 117, 118, 119, 120, 121, 122, 123, 130, 131, 132, 133, 134, 135, 136, 137, 138, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 172, 173, 174, 175, 176, 178, 179, 180, 181, 182, 183, 186, 187, 188, 189, 190, 193, 194, 195, 196, 197, 198, 200, 201, 202, 203, 204, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 238, 239, 240, 241, 242, 243, 244, 245, 246, 253, 254, 255, 256, 257, 258, 259, 260, 268, 269, 270, 271, 272, 273, 274, 283, 284, 285, 286, 287, 288, 298, 299, 300, 301, 302, 303, 304, 312, 313, 314, 315, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 349, 350, 351, 352, 353, 354, 355, 356, 357],
	
	// 1
	[4, 5, 6, 7, 8, 9, 19, 20, 21, 22, 23, 24, 34, 35, 36, 37, 38, 39, 52, 53, 54, 67, 68, 69, 82, 83, 84, 97, 98, 99, 112, 113, 114, 127, 128, 129, 142, 143, 144, 157, 158, 159, 172, 173, 174, 187, 188, 189, 202, 203, 204, 217, 218, 219, 232, 233, 234, 247, 248, 249, 262, 263, 264, 277, 278, 279, 292, 293, 294, 307, 308, 309, 319, 320, 321, 322, 323, 324, 325, 326, 327, 334, 335, 336, 337, 338, 339, 340, 341, 342, 349, 350, 351, 352, 353, 354, 355, 356, 357],

	// 2
	[4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 72, 73, 74, 75, 76, 77, 78, 88, 89, 90, 103, 104, 105, 117, 118, 119, 120, 131, 132, 133, 134, 135, 145, 146, 147, 148, 149, 159, 160, 161, 162, 163, 173, 174, 175, 176, 177, 187, 188, 189, 190, 191, 201, 202, 203, 204, 205, 215, 216, 217, 218, 219, 229, 230, 231, 232, 233, 243, 244, 245, 246, 247, 257, 258, 259, 260, 261, 271, 272, 273, 274, 275, 286, 287, 288, 289, 301, 302, 303, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],

	// 3
	[4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 72, 73, 74, 75, 76, 77, 78, 88, 89, 90, 103, 104, 105, 117, 118, 119, 120, 131, 132, 133, 134, 135, 144, 145, 146, 147, 148, 149, 159, 160, 161, 162, 163, 174, 175, 176, 177, 178, 179, 191, 192, 193, 194, 195, 207, 208, 209, 210, 223, 224, 225, 238, 239, 240, 253, 254, 255, 268, 269, 270, 271, 272, 273, 283, 284, 285, 286, 287, 288, 289, 297, 298, 299, 300, 301, 302, 303, 304, 305, 311, 312, 313, 314, 315, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 349, 350, 351, 352, 353, 354, 355, 356, 357],

	// 4
	[10, 11, 12, 24, 25, 26, 27, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 66, 67, 68, 69, 70, 71, 72, 80, 81, 82, 83, 84, 85, 86, 87, 94, 95, 96, 97, 98, 100, 101, 102, 108, 109, 110, 111, 112, 115, 116, 117, 122, 123, 124, 125, 126, 130, 131, 132, 136, 137, 138, 139, 140, 145, 146, 147, 151, 152, 153, 154, 160, 161, 162, 166, 167, 168, 175, 176, 177, 181, 182, 183, 190, 191, 192, 196, 197, 198, 205, 206, 207, 211, 212, 213, 220, 221, 222, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 280, 281, 282, 295, 296, 297, 310, 311, 312, 325, 326, 327, 340, 341, 342, 355, 356, 357],

	// 5
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 61, 62, 63, 76, 77, 78, 91, 92, 93, 106, 107, 108, 121, 122, 123, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 191, 192, 193, 194, 195, 207, 208, 209, 210, 223, 224, 225, 238, 239, 240, 253, 254, 255, 268, 269, 270, 271, 272, 273, 283, 284, 285, 286, 287, 288, 289, 297, 298, 299, 300, 301, 302, 303, 304, 305, 311, 312, 313, 314, 315, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 349, 350, 351, 352, 353, 354, 355, 356, 357],

	// 6
	[4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 72, 73, 74, 75, 76, 77, 78, 88, 89, 90, 91, 92, 93, 106, 107, 108, 121, 122, 123, 136, 137, 138, 151, 152, 153, 155, 156, 157, 158, 159, 160, 161, 162, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 196, 197, 198, 199, 200, 206, 207, 208, 209, 210, 211, 212, 213, 214, 222, 223, 224, 225, 226, 227, 228, 238, 239, 240, 241, 242, 243, 253, 254, 255, 256, 257, 258, 268, 269, 270, 271, 272, 273, 283, 284, 285, 286, 287, 288, 289, 297, 298, 299, 300, 301, 302, 303, 304, 305, 311, 312, 313, 314, 315, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 349, 350, 351, 352, 353, 354, 355, 356, 357],

	// 7
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 58, 59, 60, 73, 74, 75, 88, 89, 90, 103, 104, 105, 117, 118, 119, 120, 131, 132, 133, 134, 135, 145, 146, 147, 148, 149, 159, 160, 161, 162, 163, 173, 174, 175, 176, 177, 187, 188, 189, 190, 191, 202, 203, 204, 205, 217, 218, 219, 232, 233, 234, 247, 248, 249, 262, 263, 264, 277, 278, 279, 292, 293, 294, 307, 308, 309, 322, 323, 324, 337, 338, 339, 352, 353, 354],

	// 8
	[4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 57, 58, 59, 60, 61, 62, 63, 73, 74, 75, 76, 77, 78, 88, 89, 90, 91, 92, 93, 103, 104, 105, 106, 107, 108, 118, 119, 120, 121, 122, 123, 124, 132, 133, 134, 135, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 192, 193, 194, 195, 196, 197, 198, 208, 209, 210, 211, 212, 213, 223, 224, 225, 226, 227, 228, 238, 239, 240, 241, 242, 243, 253, 254, 255, 256, 257, 258, 268, 269, 270, 271, 272, 273, 283, 284, 285, 286, 287, 288, 298, 299, 300, 301, 302, 303, 304, 312, 313, 314, 315, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 349, 350, 351, 352, 353, 354, 355, 356, 357],

	// 9
	[4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 57, 58, 59, 60, 61, 62, 63, 73, 74, 75, 76, 77, 78, 88, 89, 90, 91, 92, 93, 103, 104, 105, 106, 107, 108, 118, 119, 120, 121, 122, 123, 133, 134, 135, 136, 137, 138, 139, 147, 148, 149, 150, 152, 153, 154, 155, 161, 162, 163, 164, 165, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 210, 223, 224, 225, 238, 239, 240, 253, 254, 255, 268, 269, 270, 271, 272, 273, 283, 284, 285, 286, 287, 288, 289, 297, 298, 299, 300, 301, 302, 303, 304, 305, 311, 312, 313, 314, 315, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 349, 350, 351, 352, 353, 354, 355, 356, 357]
];

var COLON = [2, 3, 5, 6];	// :

var LETTERS = [
	[2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 20, 21, 25, 26, 30, 31, 35],
	[1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 25, 26, 30, 31, 32, 33, 34],
	[2, 3, 4, 6, 10, 11, 16, 21, 26, 30, 32, 33, 34],
	[1, 2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 31, 32, 33, 34],
	[1, 2, 3, 4, 5, 6, 11, 16, 17, 18, 19, 21, 26, 31, 32, 33, 34, 35],
	[1, 2, 3, 4, 5, 6, 11, 16, 17, 18, 19, 21, 26, 31],
	[2, 3, 4, 6, 10, 11, 16, 21, 24, 25, 26, 30, 32, 33, 34],
	[1, 5, 6, 10, 11, 15, 16, 17, 18, 19, 20, 21, 25, 26, 30, 31, 35],
	[2, 3, 4, 8, 13, 18, 23, 28, 32, 33, 34],
	[2, 3, 4, 5, 10, 15, 20, 25, 26, 30, 32, 33, 34],
	[1, 5, 6, 9, 11, 13, 16, 17, 21, 23, 26, 29, 31, 35],
	[1, 6, 11, 16, 21, 26, 31, 32, 33, 34, 35],
	[1, 5, 6, 7, 9, 10, 11, 13, 15, 16, 18, 20, 21, 25, 26, 30, 31, 35],
	[1, 5, 6, 7, 10, 11, 13, 15, 16, 19, 20, 21, 25, 26, 30, 31, 35],
	[2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 32, 33, 34],
	[1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 26, 31],
	[2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 23, 25, 26, 29, 30, 32, 33, 34, 35],
	[1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 23, 26, 29, 31, 35],
	[2, 3, 4, 5, 6, 11, 17, 18, 19, 25, 30, 31, 32, 33, 34],
	[1, 2, 3, 4, 5, 8, 13, 18, 23, 28, 33],
	[1, 5, 6, 10, 11, 15, 16, 20, 21, 25, 26, 30, 32, 33, 34],
	[1, 5, 6, 10, 11, 15, 16, 20, 21, 25, 27, 29, 33],
	[1, 5, 6, 10, 11, 15, 16, 20, 21, 23, 25, 26, 27, 29, 30, 31, 35],
	[1, 5, 6, 10, 12, 14, 18, 22, 24, 26, 30, 31, 35],
	[1, 5, 6, 10, 12, 14, 18, 23, 28, 33],
	[1, 2, 3, 4, 5, 10, 14, 18, 22, 26, 31, 32, 33, 34, 35]
];

function getNewArr(arr) {
	var str = '';
	for(var i = 0; i < arr.length; i++) {
		str += '[';
		for(var j = 0; j <= arr[i].length - 1; j++) {
			str += arr[i][j] -  (Math.floor(arr[i][j] / 17) * 2);
			if(j != arr[i].length - 1)
				str += ', ';
		}
		str += '],';
	}
	console.log(str);
}

var POSSESSION = [
	[3, 13, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],	// Home
	[9, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], 	// Away
];

var FOUL_WORD = [1, 2, 3, 4, 5, 6, 11, 16, 17, 18, 21, 26, 31];	// F

var TIMEOUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var TIMEOUT_ARROW = [
	[5, 9, 10, 13, 14, 15, 17, 18, 19, 20, 23, 24, 25, 29, 30, 35],
	[1, 6, 7, 11, 12, 13, 16, 17, 18, 19, 21, 22, 23, 26, 27, 31]
];

var HOME = 'home';
var HOME_SCORE = 0;
var HOME_FOUL;
var AWAY = 'away';
var AWAY_SCORE = 0;
var AWAY_FOUL;
//var MAX_FOULS = 5;

var HOME_TIMEOUTS;
var AWAY_TIMEOUTS;
var TIMEOUT_LENGTH = 30;
var TIMEOUT_COUNTER;
var TIMEOUT_TIMER;

var TIMER;
var TIMER_STOPPED = true;
var TIMER_SHOTCLOCK = 24;
var TIMER_SHOTCLOCK_STOPPED = true;

$(document).ready(function(){
	changeTeamName(HOME, $('#home_team_select').val());		// home team
	changeTeamName(AWAY, $('#away_team_select').val());		// away team
	$('#stop_timer').hide();

	TIMER = 20 * 60;
	onLED('#timer .colon', COLON);
	setTimer(TIMER);
	setDefault();

	// 1000 will run it every 1 second
	var timer_counter = setInterval(timer, 1000); 
	var timer_sc_counter = setInterval(shotclockTimer, 1000);

	

	/*****************************************
		Home Controls
	*****************************************/
	// Change Team Names
	$('#home_team_select').change(function() {changeTeamName(HOME, $(this).val()); });

	// Home Points
	$('#home_add_point_1').click(function() {
		HOME_SCORE++;
		updateScore(HOME);
	});
	$('#home_add_point_2').click(function() {
		HOME_SCORE += 2;
		updateScore(HOME);
	});
	$('#home_add_point_3').click(function() {
		HOME_SCORE += 3;
		updateScore(HOME);
	});
	$('#home_remove_point').click(function() {
		if(HOME_SCORE > 0) {
			HOME_SCORE--;
			updateScore(HOME);
		}
	});

	// Fouls
	$('#home_foul_add').click(function() {
		HOME_FOUL++;
		updateFouls(HOME);
	});
	$('#home_foul_reset').click(function() {
		HOME_FOUL = 0;
		updateFouls(HOME);
	});

	// Timeouts
	$('#home_timeout').click(function() {
		if(HOME_TIMEOUTS > 0) {
			HOME_TIMEOUTS--;
			setTimeouts(HOME);
			startTimeoutTimer(HOME);
		}

		if(HOME_TIMEOUTS === 0)
			$(this).hide();
	});


	/*****************************************
		Away Controls
	*****************************************/
	// Change Team Names
	$('#away_team_select').change(function() {changeTeamName(AWAY, $(this).val()); });

	// Away Points
	$('#away_add_point_1').click(function() {
		AWAY_SCORE++;
		updateScore(AWAY);
	});
	$('#away_add_point_2').click(function() {
		AWAY_SCORE += 2;
		updateScore(AWAY);
	});
	$('#away_add_point_3').click(function() {
		AWAY_SCORE += 3;
		updateScore(AWAY);
	});
	$('#away_remove_point').click(function() {
		if(AWAY_SCORE > 0) {
			AWAY_SCORE--;
			updateScore(AWAY);
		}
	});

	// Fouls
	$('#away_foul_add').click(function() {
		AWAY_FOUL++;
		updateFouls(AWAY);
	});
	$('#away_foul_reset').click(function() {
		AWAY_FOUL = 0;
		updateFouls(AWAY);
	});

	// Timeout
	$('#away_timeout').click(function() {
		if(AWAY_TIMEOUTS > 0) {
			AWAY_TIMEOUTS--;
			setTimeouts(AWAY);
			startTimeoutTimer(AWAY);
		}

		if(AWAY_TIMEOUTS === 0) 
			$(this).hide();
	});



	/*****************************************
		Center Controls
	*****************************************/
	// Timer
	$('#start_timer').click(function() { 
		TIMER_STOPPED = false;
		TIMER_SHOTCLOCK_STOPPED = false;
		$(this).hide();
		$('#stop_timer').show();
		$('#change_time').attr('disabled', true);
	});

	$('#stop_timer').click(function() { 
		TIMER_STOPPED = true; 
		TIMER_SHOTCLOCK_STOPPED = true;
		$(this).hide();
		$('#start_timer').show();
		$('#change_time').attr('disabled', false);
	});

	$('#reset_shotclock').click(function() {
		if(!TIMER_STOPPED)
			TIMER_SHOTCLOCK_STOPPED = false;

		TIMER_SHOTCLOCK = 24;
		setShotclockTimer(TIMER_SHOTCLOCK);
	});

	$('#home_possession').click(function() {
		setPossession(HOME);
	});

	$('#away_possession').click(function() {
		setPossession(AWAY);
	});

	$('#change_time').click(function() {
		var mins = $('#mins').val() == '' ? 0 : parseInt($('#mins').val());
		var secs = $('#secs').val() == '' ? 0 : parseInt($('#secs').val());

		if(mins != 0 || secs != 0) {
			mins *= 60;
			TIMER = mins + secs;
			setTimer(TIMER);

			$('#mins').val('');
			$('#secs').val('');
		}
	});
});

// Set default values
function setDefault() {
	// shotclock
	TIMER_SHOTCLOCK_STOPPED = true;
	setShotclockTimer(24);

	// timer
	TIMER_STOPPED = true;

	// scores
	onLED('#home_score .tens', LARGE_NUMBERS[0]);
	onLED('#home_score .ones', LARGE_NUMBERS[0]);
	onLED('#away_score .tens', LARGE_NUMBERS[0]);
	onLED('#away_score .ones', LARGE_NUMBERS[0]);

	// fouls
	HOME_FOUL = 0;
	AWAY_FOUL = 0;
	showFouls(true);

	// timeouts
	HOME_TIMEOUTS = 6;
	AWAY_TIMEOUTS = 6;
	$('#home_timeout').show();
	$('#away_timeout').show();
	setTimeouts(HOME);
	setTimeouts(AWAY);
}

// Game timer: count down the main game timer
function timer() {
	if(TIMER_STOPPED == false) {
		TIMER--;
		if (TIMER < 0) {
			// clearInterval(counter);
			//counter ended, do something here

			$('#start_timer').show();
			$('#stop_timer').hide();
			disableButtons(false);
			setDefault();

			return;
		}

		setTimer(TIMER);
	}
}

// Set timer: set the game timer to a certain about of minutes and seconds
function setTimer(time) {
	var mins = parseInt(time / 60);
    var secs = parseInt(time % 60);
    var min_ten = Math.floor(mins / 10);
    var min_one = mins % 10;
    var sec_ten = Math.floor(secs / 10);
    var sec_one = secs % 10;

    onLED('#minute_ten', SMALL_NUMBERS[min_ten]);
	onLED('#minute_one', SMALL_NUMBERS[min_one]);
	onLED('#second_ten', SMALL_NUMBERS[sec_ten]);
	onLED('#second_one', SMALL_NUMBERS[sec_one]);
}

// Shotclock timer: 24 second shotclock timer
function shotclockTimer() {
	if(TIMER_SHOTCLOCK_STOPPED == false) {
		TIMER_SHOTCLOCK--;
		if(TIMER_SHOTCLOCK == 0) {
			TIMER_SHOTCLOCK_STOPPED = true;
		}

		setShotclockTimer(TIMER_SHOTCLOCK);
	}
}

// Set shotclock timer: sets the shotclock timer to the current time
function setShotclockTimer(time) {
    var sec_ten = Math.floor(time / 10);
    var sec_one = time % 10;

	onLED('#shotclock_tens', SMALL_NUMBERS[sec_ten]);
	onLED('#shotclock_ones', SMALL_NUMBERS[sec_one]);
}

// Start Timeout timer: initialize the timeout timer and all other settings
// - who: who called timeout, Home or Away
function startTimeoutTimer(who) {
	TIMER_STOPPED = true;
	TIMER_SHOTCLOCK_STOPPED = true;

	$('#start_timer').show();
	$('#stop_timer').hide();
	
	TIMEOUT_COUNTER = TIMEOUT_LENGTH;
	showFouls(false);
	disableButtons(true);

	if(who == HOME)
		onLED('#home_foul_count', TIMEOUT_ARROW[0]);
	else
		onLED('#away_foul_count', TIMEOUT_ARROW[1]);

	TIMEOUT_TIMER = setInterval(timeoutTimer, 1000);
}

// Timeout timer: count down of the timeout timer
function timeoutTimer() {
	TIMEOUT_COUNTER--;
	if(TIMEOUT_COUNTER < 0) {
		clearInterval(TIMEOUT_TIMER);
		disableButtons(false);
		showFouls(true);

		return;
	}

	setTimeoutTimer(TIMEOUT_COUNTER);
}

// Set timeout timer: sets the timeout timer to the current time
// - time: time to display
function setTimeoutTimer(time) {
	var sec_ten = Math.floor(time / 10);
	var sec_one = time % 10;

	onLED('#timeout_tens', SMALL_NUMBERS[sec_ten]);
	onLED('#timeout_ones', SMALL_NUMBERS[sec_one]);
}


// Change the team name:
// - who: which side; Home or Away
// - team: the team name
function changeTeamName(who, team) {
	// clear current team name
	(($('#' + who + '_team_name').children('.number_small')).children()).removeClass('on');

	var start = 0;
	var numChars = team.length;
	if(numChars < 5) 
		start = 1;

	// display new team name
	for(var i = start; i < (numChars + start); i++) {
		onLED('#' + who + '_letter_' + i, LETTERS[team.charCodeAt(i - start) - 65]);
	}
}

// Update the Score:
// - who: who to update, Home or Away
function updateScore(who) {
	var score = AWAY_SCORE;
	if(who == HOME) 
		score = HOME_SCORE;

	var one = score % 10;
	var ten = Math.floor(score / 10) % 10;

	$('#' + who + ' .one')
	onLED('#' + who + '_score .tens', LARGE_NUMBERS[ten]);
	onLED('#' + who + '_score .ones', LARGE_NUMBERS[one]);
}

// Update Fouls: increase foul count
// - who: who to update, Home or Away
function updateFouls(who) {
	var fouls = AWAY_FOUL;
	if(who == HOME)
		fouls = HOME_FOUL;

	fouls = fouls % 10;
	onLED('#' + who + '_foul_count', SMALL_NUMBERS[fouls])
}

// Set who has possession
// - who: who has possession, Home or Away
function setPossession(who) {
	offLED('.possession');
	//$('.possession .circle').removeClass('on');

	var possession = 0;
	if(who == AWAY)
		possession = 1;

	onLED('#' + who + '_possession_arrow', POSSESSION[possession]);
}

// Set the number of timeouts left:
// - who: set whos timeouts, Home or Away
function setTimeouts(who) {
	offLED('#' + who + '_score .timeout_section .timeouts');
	//$('#' + who + '_score .timeout_section .timeouts .circle').removeClass('on');

	var timeouts = HOME_TIMEOUTS;
	if(who == AWAY)
		timeouts = AWAY_TIMEOUTS;

	timeouts = (timeouts * 2) + 1;

	for(var i = timeouts; i > 0; i = i - 2) {
		onLED('#' + who + '_score .timeout_section .timeouts:nth-child(' + i + ')', TIMEOUT);
	}
}

function showFouls(show) {
	if(show) {
		onLED('.foul_word', FOUL_WORD);
		onLED('#home_foul_count', SMALL_NUMBERS[HOME_FOUL]);
		onLED('#away_foul_count', SMALL_NUMBERS[AWAY_FOUL]);

		offLED('#timeout_tens');
		offLED('#timeout_ones');
	} else {
		// hide fouls, show timeout arrow
		offLED('.foul_word');
		offLED('#home_foul_count');
		offLED('#away_foul_count');

		setTimeoutTimer(TIMEOUT_COUNTER);
	}
}

// Turn on certain LED's:
// - id: the section of LED's we are updating
// - array: a list of LED's we are turning on
function onLED (id, array) {
	offLED(id);
	//$(id + ' .circle').removeClass('on');

	for(var i = 0; i < array.length; i++) {
		$(id + ' .circle:nth-child('+ array[i]+')').addClass('on');
	}
}

function offLED (id) {
	$(id + ' .circle').removeClass('on');
}

// Disable Buttons:
function disableButtons(setting) {
	$('button').attr('disabled', setting);
}
