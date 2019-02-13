/** sidebarView Object constructor
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class sidebarView {
	constructor(container, model) {
		this.container = container;
		/**
		 * We use the @method find() on @var {jQuery object} container to look for various elements 
		 * inside the view in orther to use them later on. For instance:
		 * 
		 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
		 * represents the placeholder for where we want to show the number of guests. It's
		 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
		 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
		 * only 'Hello world', but you should change this by end of Lab 1).

		 */

		this.numberOfGuests = container.find("#numberOfGuests");
		let nGuests = model.getNumberOfGuests();
		let price = 0;
		let currentMenu = container[0].querySelector(".dishMenu");

		if (model.menu.length >= 0) {
			let menuList = document.createElement("div");
			menuList.setAttribute("class", "menuList");
			model.menu.forEach(dish => {
				let menuItem = document.createElement("div");
				let name = dish.name;
				let dPrice = model.dishPrice(dish.ingredients) * nGuests;
				menuItem.innerText = `${name}  ${dPrice}`;
				menuList.appendChild(menuItem);
				price += dPrice;
			});

			price = price;
			currentMenu.appendChild(menuList);

		}

		this.menuPrice = document.createElement("div");
		this.menuPrice.innerHTML = `SEK ${price}`
		currentMenu.appendChild(this.menuPrice);

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
		this.confirmbtn = document.createElement("input");
		this.confirmbtn.setAttribute("type", "button");
		this.confirmbtn.setAttribute("class", "btn-sm btn-primary")
		this.confirmbtn.setAttribute("value", "Confirm Dinner");
		let btnDiv = document.createElement("div")
		btnDiv.appendChild(this.confirmbtn)
		currentMenu.appendChild(btnDiv);

		/**
		 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
		 * in our view to dynamically set it's value to "Hello World".
		 */
		this.numberOfGuests.text(nGuests);
		model.addObserver(this.update.bind(this));
	}



	//Controller code--------------------------------------------------------------------------------------------
	update(model, changeDetails) {
		// redraw just the portion affected by the changeDetails
		// or remove all graphics in the view, read the whole model and redraw 
		this.numberOfGuests = this.container.find("#numberOfGuests");
		this.numberOfGuests[0].innerText = model.getNumberOfGuests();

		if (model.menu.length > 0) {
			let menuList = this.container.find(".menuList")[0];
			menuList.innerHTML = "";
			model.menu.forEach(dish => {
				let menuItem = document.createElement("div");
				let name = dish.title;
				let dPrice = 1;//model.dishPrice(dish.extendedIngredients) * model.getNumberOfGuests();
				menuItem.innerText = `${name}  ${dPrice}`;
				menuList.appendChild(menuItem);
			});
		}

		this.menuPrice.innerHTML = `SEK ${model.getTotalMenuPrice()}`

	}

}