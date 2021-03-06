class dishDetailsView {
  constructor(container, model) {
    this.container = container;
    this.ingregientsDiv = container[0].querySelector(".ingredients");

    this.model = model;
    this.dishContainer = container;

    this.nGuests = this.model.numberGuests;
    this.dish = this.model.getCurrentDish();
    this.ingredients = [{
      'name': 'eggs',
      'quantity': 0.5,
      'unit': '',
      'price': 10
    }]//TO BE FIXED//this.dish.ingredients;


    this.dishDetails = container[0].querySelector(".dishDetails");

    let dishContent = document.createElement("div");
    dishContent.setAttribute("class", "dishContent");

    let dHeader = document.createElement("h2")
    let dImg = document.createElement("img");
    let dishDesc = document.createElement("p");
    this.dbackButton = document.createElement("input");

    dHeader.innerHTML = this.dish.name;
    dImg.src = this.dish.image;
    dishDesc.innerHTML = this.dish.description;
    this.dbackButton.setAttribute("type", "button");
    this.dbackButton.setAttribute("value", "back to search");
    this.dbackButton.setAttribute("class", "btn btn-sm btn-primary");

    dishContent.appendChild(dHeader);
    dishContent.appendChild(dImg);
    dishContent.appendChild(dishDesc);
    dishContent.appendChild(this.dbackButton);
    this.dishDetails.appendChild(dishContent);


    this.ingredientList = document.createElement("div");
    let th = document.createElement("th");
    th.innerHTML = `Ingredients for ${this.nGuests} people`
    //this.ingredientList.appendChild(p);
    let sum = 0;
    let table = document.createElement("table");
    table.appendChild(th);
    table.setAttribute("class", "table");

    this.ingredients.forEach(ingredient => {
      let row = document.createElement("tr");
      let quantTR = document.createElement("td");
      let unitTR = document.createElement("td");
      let nameTR = document.createElement("td");
      let priceTR = document.createElement("td");

      sum += ingredient.price;

      quantTR.innerText = ingredient.quantity
      unitTR.innerText = ingredient.unit
      nameTR.innerText = ingredient.name
      priceTR.innerText = `SEK ${ingredient.price}`

      row.appendChild(quantTR)
      row.appendChild(unitTR)
      row.appendChild(nameTR)
      row.appendChild(priceTR)

      table.appendChild(row);
      //this.ingredientList.appendChild(p);
    });

    this.ingredientList.appendChild(table);

    this.addToMenu = document.createElement("input");
    this.addToMenu.setAttribute("type", "button");
    this.addToMenu.setAttribute("value", "Add to menu");
    this.addToMenu.setAttribute("class", "btn btn-sm btn-success");
    let price = document.createElement("span")



    price.innerHTML = `SEK ${sum}`;
    this.ingredientList.appendChild(this.addToMenu);
    this.ingredientList.appendChild(price);

    this.ingredientList.setAttribute("class", "ingredientList");
    this.ingregientsDiv.appendChild(this.ingredientList)


    model.addObserver(this.update.bind(this));
  }
  createNavigationDiv(){

  }
  createPrepDiv(dish){
    let dishContent = document.createElement("div");
    dishContent.setAttribute("class", "dishContent"); 

    
    let dHeader = document.createElement("h2")
    let dImg = document.createElement("img");
    let dishDesc = document.createElement("p");

    dHeader.innerHTML = dish.title;
    dImg.src = dish.image;
    dishDesc.innerHTML = dish.instructions;

    dishContent.appendChild(dHeader);
    dishContent.appendChild(dImg);
    dishContent.appendChild(dishDesc);
    dishContent.appendChild(this.dbackButton);
    this.dishDetails.appendChild(dishContent);


  }
  createTable(ingredients){
    let th = document.createElement("th")
    th.innerHTML = `Ingredients for ${this.nGuests} people`
    let sum = 0;
    let table = document.createElement("table");

    let tablebtn = document.createElement("th")
    tablebtn.appendChild(this.addToMenu);
    
    table.appendChild(th);
    table.appendChild(tablebtn);
    table.setAttribute("class", "table");

    ingredients.forEach(ingredient => {
      let row = document.createElement("tr");
      let quantTR = document.createElement("td");
      let unitTR = document.createElement("td");
      let nameTR = document.createElement("td");
      let priceTR = document.createElement("td");

      sum += 1;

      quantTR.innerText = ingredient.amount
      unitTR.innerText = ingredient.unit
      nameTR.innerText = ingredient.name
      priceTR.innerText = `SEK 1`
      row.appendChild(quantTR)
      row.appendChild(unitTR)
      row.appendChild(nameTR)
      row.appendChild(priceTR)
      table.appendChild(row);

    })


    let price = document.createElement("span")
    price.innerHTML = `SEK ${sum}`;

    this.ingredientList.appendChild(table);
    this.ingredientList.appendChild(price);

  }
  update(model, changedetails) {
    this.ingregientsDiv.innerHTML = "";

    this.nGuests = this.model.numberGuests;
    this.dish = this.model.getDish(1);//this.model.getCurrentDish();
    this.ingredients = this.ingredients = [{
      'name': 'eggs',
      'quantity': 0.5,
      'unit': '',
      'price': 10
    }]//TO BE FIXED//this.dish.ingredients;

    this.dishDetails.innerHTML = "";

    let dishContent = document.createElement("div");
    dishContent.setAttribute("class", "dishContent");

    let dHeader = document.createElement("h2")
    let dImg = document.createElement("img");
    let dishDesc = document.createElement("p");

    this.ingredientList.innerHTML = "";
    
    
    //TO BE FIXED
    this.container.find($(".loader")).show()
    model.getInstructions(model.currentDish)
    .then(response => {
      this.container.find($(".loader")).hide()
      this.createPrepDiv(response)
      this.createTable(response.extendedIngredients)    
    })


    // this.ingredientList.appendChild(table);

    

    this.ingredientList.setAttribute("class", "ingredientList");
    this.ingregientsDiv.appendChild(this.ingredientList)

  }
} 
