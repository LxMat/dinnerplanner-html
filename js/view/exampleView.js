/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
class ExampleViewController{
 constructor(view, model) {

    view.plusButton.addEventListener("click", 
        () => {model.setNumberOfGuests(model.getNumberOfGuests() + 1)} );
    view.minusButton.addEventListener("click", 
        () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
  }
}


var exampleView = function (container, model) {
	
	


	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 * 
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	var numberOfGuests= container.find("#numberOfGuests");
	
	let nGuests = model.getNumberOfGuests();
	
	let price = 0;
	let currentMenu = container[0].querySelector(".dishMenu");

	if(model.menu.length>=0){
		let menuList = document.createElement("div");
		menuList.setAttribute("class","menuList");
		model.menu.forEach(dish => {
			let menuItem = document.createElement("div");
			let name = dish.name;
			let dPrice = model.dishPrice(dish.ingredients)*nGuests; 
			menuItem.innerText=`${name}  ${dPrice}`;
			menuList.appendChild(menuItem);
			price += dPrice;
		});

		price = price;
		container[0].appendChild(menuList);
		
	}
	
	var menuPrice = document.createElement("div");
	menuPrice.innerHTML = `SEK ${price}`
	currentMenu.appendChild(menuPrice);
	

	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	
	this.plusButton = container.find("#plusGuest")[0];
	this.minusButton = container.find("#minusGuest")[0];
	
	this.comfirmbtn = document.createElement("input");
	this.comfirmbtn.setAttribute("type","button");
	this.comfirmbtn.setAttribute("class", "btn-sm btn-primary")
	this.comfirmbtn.setAttribute("value","Confirm Dinner");
	let btnDiv = document.createElement("div")
	btnDiv.appendChild(this.comfirmbtn)
	currentMenu.appendChild(btnDiv);
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	
	 numberOfGuests.text(nGuests);

	 //Controller code--------------------------------------------------------------------------------------------
	this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     // or remove all graphics in the view, read the whole model and redraw 

     numberOfGuests[0].innerText = model.getNumberOfGuests();

     

     if(model.menu.length>0){
		let menuList = container.find(".menuList")[0];
		menuList.innerHTML = "";
		model.menu.forEach(dish => {
			let menuItem = document.createElement("div");
			let name = dish.name;
			let dPrice = model.dishPrice(dish.ingredients)*nGuests; 
			menuItem.innerText=`${name}  ${dPrice}`;
			menuList.appendChild(menuItem);
			price += dPrice;
		});
	}

	menuPrice.innerHTML = `SEK ${model.getTotalMenuPrice()}`

	} 

	new ExampleViewController(this, model);
	model.addObserver(this.update);
}


 
