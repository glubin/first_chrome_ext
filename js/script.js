var months = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];
var updateFreq = 15; // in seconds
var clickCount= 0;

$( document ).ready(function() {
	update();
	window.setInterval(function(){
		update();
	}, updateFreq * 1000); //updates every 2 seconds

	$( "#myButton" ).click(function() {

		if (clickCount == 0){
			$('.btn-info').css('background-color','#5cb85c');
			var t = '<textarea>';
			$('.btn-info').html('Submitted');
			$('#subMess').attr("placeholder","[display user submitted text]");
			$('#subMess').val('');
			console.log("clicks: " + clickCount);
			clickCount = clickCount + 1;
		} else{
			var mess = $('#subMess').text();
			if (true){
				console.log("clicks: " + clickCount);
				clickCount = clickCount + 1;
				$('#subMess').val('');
				$('#subMess').attr("placeholder","[display user resubmitted text]");
			}
		}

		$('#my_form').keydown(function() {
			var key = e.which;
			if (key == 13) {

		$('#my_form').submit(); {} // Submit form code
		//
		}
	}
});
	});


});

function update() {

	clickCount = 0;
	$('.btn-info').html('Submit');
	$('.btn-info').css('background-color','#5bc0de');
	$('#subMess').attr("placeholder","submit text to be randomly selected every ten minutes");
	var day = (new Date).getDate();
	var month = (new Date).getMonth();
	var year = (new Date).getFullYear();

	var hours = (new Date).getHours();
	if (hours == 12 || 12){
		hours = 12;
	} else {
		hours = hours % 12;
	}
	var minutes = (new Date).getMinutes();
	if (minutes < 10){
		minutes = "0" + minutes;
	}

	var fullDate = months[month] + " " + day + ", " + year;
	var fullTime = hours + ":" + minutes;

	console.log(fullDate);
	console.log(fullTime);
	$("#myDate").html(fullDate);
	$("#myTime").html(fullTime);

}
