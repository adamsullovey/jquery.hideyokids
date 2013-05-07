(function( $ ){

	/**
	* all up in your global namespace
	*/
	$.fn.hideyokids = function( type ) {
		this.children().hide();
	};

	$.fn.showyokids = function( type ) {
		this.children().show();
	};


	$.fn.hideyowife = function( type ) {
		this.next().hide();
	};

	$.fn.showyowife = function( type ) {
		this.next().show();
	};


})( jQuery );