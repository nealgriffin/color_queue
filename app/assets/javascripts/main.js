$(document).ready(function() {
	console.log("good to see you neal");
	var myTimeout;
	
	function countDownTimer(secT, minT) {

		secT--;
		if (secT == -01) {
			secT = 59;
			minT = minT - 1; }
			else {
				minT = minT;
		}
		if (secT<=9) { secT = "0" + secT; }
		timeT = secT + " sec ";

		//if (document.getElementById) { document.getElementById('theTimeT').innerHTML = timeT; }
		$('#timer').html(timeT);

		myTimeout = setTimeout(function() { countDownTimer(secT, minT);}, 1000);
		if (minT == '00' && secT == '00') { 
			secT = "00";
			window.clearTimeout(myTimeout);
			restartColor();
		}
	};

	$('#startColor').click(function() {
		var secT = 4;
		var minT = 0;
		countDownTimer(secT, minT);
	});
	$('#stopColor').click(function() {
		window.clearTimeout(myTimeout);
	})
	
	var restartColor = function() {
			
			firstNumber = Math.floor(Math.random() * 256);
			secondNumber = Math.floor(Math.random() * 256);
			thirdNumber = Math.floor(Math.random() * 256);
			$.ajax({
    		type: 'GET',
    		url: '/push_color',
    		data: {
    				"color_one": firstNumber,
    				"color_two": secondNumber,
    				"color_three": thirdNumber
    		},
    		dataType: 'json',
    		success: function( resp ) {
      		console.log( resp );
      		$('body').css('background-color', 'rgb(' + resp["one"] + ", " + resp["two"] + ", " + resp["three"] + ")")
    		}
  		});


			
			var secT = 4;
			var minT = 0;
			countDownTimer(secT, minT);
		};

})