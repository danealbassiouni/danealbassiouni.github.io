// This is a line comment
/*This is a line comment*/
// When the page loads
$(function () {
	// hide the sections
	$('h3').next().hide();

// When the user clicks an h3 heading
	$('h3').on('click',function(){


// Show or hide the next element
		$(this).next().slideToggle(500);

	});

})