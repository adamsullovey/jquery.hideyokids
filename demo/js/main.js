$('.evil-demo').click( function(event) {

		// how can this be
		eval($(event.target).text());
});
