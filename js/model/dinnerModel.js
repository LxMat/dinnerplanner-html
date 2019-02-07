//DinnerModel Object constructor

var DinnerModel = function() {






// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

















	const spoonApi = new SpoonAPI();
	this.spoonKey = spoonApi.KEY;
	this.loadingDone = true;
	this.handleHTTPError = (response) =>  {
		if(response.ok)
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
		var observers=[];
    this.addObserver=function(observer){ observers.push(observer); }
   
    this.notifyObservers=function(){ 
    	//console.log("notify dish length",dishes.length)
			
			
			console.log("dishes",dishes)
        for(var i=0; i<observers.length; i++)
             observers[i](this); // we assume that observers[i] is a function, so we call it like observers[i](parameters)
    }

    this.removeObserver=function(observer){ observers.filter(item => item !== observer)}
	

	let query ={
		diet:"",
		exclude:"",
		instructionsreq:false,
		intolerances:"",
		limitLicense:false,
		number:10,
		searchquery:"burger",
		type:"main+course"
	}
	let res = []
	 	
	 this.getAllDishes = (parameters) =>{
		
		let {diet,exclude,instructionsreq,intolerances,limitLicense,number,offset,searchtxt="burger",type} = parameters;
		
		//searchtxt =query.searchquery

		//let searchquery = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=${diet}&excludeIngredients=${exclude}&instructionsRequired=false&intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&query=burger&type=main+course`
		let searchqueryURL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?&&instructionsRequired=false&limitLicense=false&number=10&offset=0&query=${searchtxt}&type=main+course`
		let request = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&query=burger&type=main+course`
		
		//`https://spoonacular.com/recipeImages/${dish.image}`
		
		//Experimenting with fetch
		//dishes = [];
		console.log("new request");
		
		
		this.loadingDone = false;
		this.notifyObservers();
		return fetch(searchqueryURL,
		{headers:{
			"X-Mashape-Key":this.spoonKey,
			"content-type":"application/JSON"
		}})
		.then(this.handleHTTPError)
		.then(response => response.json())
		.then(object => {
			dishes = [];
			object.results.map(dish => {
			dishes.push({
				id:dish.id,
				name:dish.title,
				type:"main dish",
				image:"infinity.png",
				imageURL:`https://spoonacular.com/recipeImages/${dish.image}`,
				ingredients:[{ 
					'name':'',
					'quantity':0,
					'unit':'',
					'price':1
					}]
				})
		});
		this.currentDish = dishes[0].id;
		this.loadingDone = true;
		})
		.then(_ => this.notifyObservers())
		.then(console.log("done"))
		.catch(console.error)
	}
	console.log("before getall",dishes);
	this.getAllDishes(query);
	console.log("after getall",dishes);
	
	// .map( dish => res.push(
	// 	{
	// 	id :dish.id,
	// 	name:dish.title,
	// 	image:dish.image
	// 	}
	// ))
	this.getStoredDishes=() => dishes;
	this.updateQuery = (query)=>{
				query.searchquery =query;
				this.getAllDishes({searchtxt:query})
			}
	this.numberGuests = 0;

	this.menu = [];
	this.setNumberOfGuests = num => {
		if(num>=0){
			this.numberGuests= num;
			this.notifyObservers();}
	}	
	this.getNumberOfGuests = ()=>  this.numberGuests;

	//Keep track of current dish
	
	
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = type => {return dishes.filter(dish => dish.type===type);}
	
	//Returns all the dishes on the menu.

	this.getFullMenu =_=>this.menu;
	
	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		let ingredients = []
		this.menu.forEach(menuItem=>{
			menuItem.ingredients.forEach(ingredient => {
				ingredients.push(ingredient);
			})
		});
		return ingredients;
	}
	this.dishPrice = (ingredients)=>{
		let sum= 0;
		ingredients.forEach(ingredient =>{
			sum+= ingredient.price;
		})
		return sum;
	}
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		let sum = 0;
		
		this.menu.forEach(menuItem=>{
			menuItem.ingredients.forEach(ingredient => {
				sum += ingredient.price;
			})
		});
		return sum*this.numberGuests;
		//TODO Lab 1
	}
	
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = id => {
		let dish = this.getDish(id);		  
		for(let i = this.menu.length - 1 ;i>=0;i--){
			if(this.menu[i].type == dish.type){
				this.menu.splice(i,1);
			}
		}
		 this.menu.push(dish);
		 this.notifyObservers();
		 
		}
		
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		this.menu = this.menu.filter(menuDish => menuDish.id != id);
		this.notifyObservers();
		//TODO Lab 1
	}
	
	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.searchDishes = function (type,filter) {
		query.searchquery = filter;
		//this.getAllDishes(query);
		console.log(query)
		//console.log("searched dish length", dishes.length)
		
		
		return dishes.filter(function(dish) {
			var found = true;
			if(filter){
				filter = filter.toLowerCase()
				found = false;
				
				dish.ingredients.forEach(function(ingredient) {
					if(ingredient.name.indexOf(filter)!=-1) {
						found = true;
					}
				});
				if(dish.name.indexOf(filter) != -1)
				{
					found = true;
				}
			}
			return dish.type == type && found;
		});	
	}
	
	//function that returns a dish of specific ID
	this.getDish = function (id) {
		for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
	

	
	//returns all dishes
	this.getDishes = _ =>{
		return dishes
			.map(dish => {
				return {
					id:dish.id,
					name:dish.name,
					adress:dish.image
					}
				});
	}


	console.log(dishes)
	this.currentDish = 1;
	this.getCurrentDish = () => this.getDish(this.currentDish) 
	this.setCurrentDish =(id) => {
		this.currentDish = id
		this.notifyObservers();	
	};



	

}
