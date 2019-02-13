//DinnerModel Object constructor

var DinnerModel = function () {

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id': 1,
		'name': 'French toast',
		'title': 'French toast',
		'type': 'starter',
		'image': 'toast.jpg',
		'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients': [{
			'name': 'eggs',
			'quantity': 0.5,
			'unit': '',
			'price': 10
		}, {
			'name': 'milk',
			'quantity': 30,
			'unit': 'ml',
			'price': 6
		}, {
			'name': 'brown sugar',
			'quantity': 7,
			'unit': 'g',
			'price': 1
		}, {
			'name': 'ground nutmeg',
			'quantity': 0.5,
			'unit': 'g',
			'price': 12
		}, {
			'name': 'white bread',
			'quantity': 2,
			'unit': 'slices',
			'price': 2
		}]
	}];

	const spoonApi = new SpoonAPI();
	this.spoonKey = spoonApi.KEY;
	this.loadingDone = true;
	this.handleHTTPError = (response) => {
		if (response.ok)
			return response;
		throw Error(response.statusText);
	}


	// 'id':1,
	// 'name':'French toast',
	// 'type':'starter',
	// 'image':'toast.jpg',
	// 'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
	// 'ingredients':[{ 
	// 	'name':'eggs',
	// 	'quantity':0.5,
	// 	'unit':'',
	// 	'price':10
	// 	}

	//Controller code
	var observers = [];
	this.addObserver = function (observer) {
		observers.push(observer);
	}

	this.notifyObservers = function () {
		console.log("dishes", dishes)
		for (var i = 0; i < observers.length; i++)
			observers[i](this); // we assume that observers[i] is a function, so we call it like observers[i](parameters)
	}

	this.removeObserver = function (observer) {
		observers.filter(item => item !== observer)
	}

	// let apiParam = {
	// 	diet: "",
	// 	exclude: "",
	// 	instructionsreq: false,
	// 	intolerances: "",
	// 	limitLicense: false,
	// 	number: 10,
	// 	searchquery: "burger",
	// 	type: "main+course"
	// }


	let apiParam = {
		query: "burger",
		type: "main course"
	}


	this.updateQuery = (query,type) => {
		apiParam.query = query;
		apiParam.type = type;
	}

	this.getQuery = () =>apiParam;

	this.getAllDishes = () => {
		
		let parameters = this.getQuery();
		console.log(parameters);
		let searchParams = new URLSearchParams(parameters);
		let searchString  = searchParams.toString();

		//let searchquery = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=${diet}&excludeIngredients=${exclude}&instructionsRequired=false&intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&query=burger&type=main+course`
		let searchqueryURL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?${searchString}`

		//Experimenting with fetch
		console.log("new request");

		this.loadingDone = false;
		return fetch(searchqueryURL, {
				headers: {
					"X-Mashape-Key": this.spoonKey,
					"content-type": "application/JSON"
				}
			})
			.then(this.handleHTTPError)
			.then(response => {
				this.loadingDone = true;
				//this.notifyObservers("SearchDone")
				return response.json();})
			.catch(console.error)
	}


	this.getInstructions = id =>{
		url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`
		return fetch(url,{
			headers:{
				"X-Mashape-Key": this.spoonKey,
				"content-type": "application/JSON"
			}
		})
		.then(this.handleHTTPError)
		.then(response =>response.json())
	}

	//this.getAllDishes(apiParam);

	this.getStoredDishes = () => dishes;

	this.numberGuests = 0;

	this.menu = [];
	this.setNumberOfGuests = num => {
		if (num >= 0) {
			this.numberGuests = num;
			this.notifyObservers();
		}
	}
	this.getNumberOfGuests = () => this.numberGuests;
	
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = type => {
		return dishes.filter(dish => dish.type === type);
	}

	//Returns all the dishes on the menu.

	this.getFullMenu = _ => this.menu;

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function () {
		//TODO Lab 1
		let ingredients = []
		this.menu.forEach(menuItem => {
			menuItem.extendedIngredients.forEach(ingredient => {
				ingredients.push(ingredient);
			})
		});
		return ingredients;
	}
	this.dishPrice = (ingredients) => {
		let sum = 0;
		ingredients.forEach(ingredient => {
			sum += 1;//ingredient.price;
		})
		return sum;
	}
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function () {
		let sum = 0;

		console.log(this.menu);
		this.menu.forEach(menuItem => {
			menuItem.extendedIngredients.forEach(ingredient => {
				sum += 1;//ingredient.price;
			})
		});
		return sum * this.numberGuests;
		//TODO Lab 1
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = id => {
		//let dish = ""
		this.getPromiseDish(id).then(dish => {
			for (let i = this.menu.length - 1; i >= 0; i--) {
				if (this.menu[i].type == dish.type) {
					this.menu.splice(i, 1);
				}
		}
			this.menu.push(dish);
			this.notifyObservers();
		})
		

	}

	//Removes dish from menu
	this.removeDishFromMenu = function (id) {
		this.menu = this.menu.filter(menuDish => menuDish.id != id);
		this.notifyObservers();
		//TODO Lab 1
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	//OBSOLETE
	this.searchDishes = function (type, filter) {
		apiParam.query = filter;
		//console.log("searched dish length", dishes.length)


		return dishes.filter(function (dish) {
			var found = true;
			if (filter) {
				filter = filter.toLowerCase()
				found = false;

				dish.extendedIngredients.forEach(function (ingredient) {
					if (ingredient.name.indexOf(filter) != -1) {
						found = true;
					}
				});
				if (dish.name.indexOf(filter) != -1) {
					found = true;
				}
			}
			return dish.type == type && found;
		});
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		for (key in dishes) {
			if (dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	this.getPromiseDish = function (id){
		//let searchquery = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=${diet}&excludeIngredients=${exclude}&instructionsRequired=false&intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&query=burger&type=main+course`
		let searchqueryURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`

		//Experimenting with fetch
		console.log("new request");

		this.loadingDone = false;
		return fetch(searchqueryURL, {
				headers: {
					"X-Mashape-Key": this.spoonKey,
					"content-type": "application/JSON"
				}
			})
			.then(this.handleHTTPError)
			.then(response => {
				this.loadingDone = true;
				return response.json();})
			.catch(console.error)
	}



	//returns all dishes
	this.getDishes = _ => {
		return dishes
			.map(dish => {
				return {
					id: dish.id,
					name: dish.name,
					adress: dish.image
				}
			});
	}


	//Keep track of current dish
	this.currentDish = dishes[0];
	this.getCurrentDish = () => this.currentDish;
	this.setCurrentDish = (dish) => {
		this.currentDish = dish;
		this.notifyObservers();
	};





}