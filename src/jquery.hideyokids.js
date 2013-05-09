(function( $ ){

	/**
	* all up in your global namespace
	*/
	$.fn.hideyokids = function( type ) {
		this.children().hide();
		return this;
	};

	$.fn.showyokids = function( type ) {
		this.children().show();
		return this;
	};


	$.fn.hideyowife = function( type ) {
		this.next().hide();
		return this;
	};

	$.fn.showyowife = function( type ) {
		this.next().show();
		return this;
	};


})( jQuery );