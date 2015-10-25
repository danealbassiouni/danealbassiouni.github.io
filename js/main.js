function askQuestions(){


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	var faveColour = prompt ('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red'||
		faveColour == 'yellow'||
		faveColour == 'blue'||
		faveColour == 'green'){
		
		$('h2').css('color', faveColour)
	}



	$ ('h2').text('T says Hi ' + fullName)

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge)
	if (userAge >= 18) {
		console.log ('User is an adult.');
	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	}
	else {
		console.log('User is a child.');
	}

	if (firstName === 'General' && lastName!== 'Assembly')
	{
		console.log('Hey General');
	}

}

	// When the page loads
	$(function () {
		$("img").on('click', askQuestions)
		// hide the sections
		$('h3').next().hide();

	// When the user clicks an h3 heading
		$('h3').on('click',function(){


	// Show or hide the next element
			$(this).next().slideToggle(500);

		});

	})

