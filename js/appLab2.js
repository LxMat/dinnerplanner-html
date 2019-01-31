$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	if(window.location.href.indexOf("dinnerOverview.html")!==-1){
		model.addDishToMenu(1);
		model.addDishToMenu(101);
		model.addDishToMenu(201);
		model.setNumberOfGuests(2);
		console.log($(".overview"));
		var dOverView = new dinnerOverView($(".overview"),model);
	}

	if(window.location.href.indexOf("dinnerPrintout.html")!==-1){
		model.addDishToMenu(1);
		model.addDishToMenu(101);
		model.addDishToMenu(201);
		model.setNumberOfGuests(2);
		var dPrintoutView = new dinnerPrintoutView($(".printout"),model);
	}

	// And create the instance of ExampleView
	if ($(".sidebar").length){
		if(window.location.href.indexOf("selectDish2.html")!==-1){
			model.addDishToMenu(2);
			model.setNumberOfGuests(2);
		} 
		
		var sidebarView = new exampleView($(".sidebar"),model);
		
	} 
	if($(".dishSearchView").length){
		var contView = new contentView($(".dishSearchView"),model);
	}
	if($(".dishDetails").length){
		var dishDetail = new dishDetailsView($(".dishDetails"),model);
	}




 	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});