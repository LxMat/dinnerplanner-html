var dishDetailsView = function(container,model){
  
  this.dishModel = model;
  this.dishContainer = container;
  
  this.nGuests = this.dishModel.numberGuests;
  this.dish = this.dishModel.getDish(1);
  this.ingredients = this.dish.ingredients;
  
  let dishContent = document.createElement("div");
  dishContent.setAttribute("class","dishContent");
  
  let dHeader = document.createElement("h2")
  let dImg = document.createElement("img");
  let dishDesc = document.createElement("p");
  let dBackButton = document.createElement("input");
  
  dHeader.innerHTML = this.dish.name;
  dImg.src=`images/${this.dish.image}`;
  dishDesc.innerHTML =  this.dish.description;
  dBackButton.setAttribute("type","button");
  dBackButton.setAttribute("value","back to search");
  
  dishContent.appendChild(dHeader);
  dishContent.appendChild(dImg);
  dishContent.appendChild(dishDesc);
  dishContent.appendChild(dBackButton);
  container[0].appendChild(dishContent);


  this.ingredientList = document.createElement("div");
  let p = document.createElement("p");
  p.innerHTML = `ingredients for ${this.nGuests} people`
  this.ingredientList.appendChild(p);
  let sum = 0;
  this.ingredients.forEach(ingredient => {
    sum += ingredient.price;
    let p = document.createElement("p");
    p.innerHTML = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name} ${ingredient.price}`;
    this.ingredientList.appendChild(p);
  });
  let addToMenu = document.createElement("input");
  addToMenu.setAttribute("type","button");
  addToMenu.setAttribute("value","Add to menu");
  let price = document.createElement("span")



  price.innerHTML = `SEK ${sum}`;
  this.ingredientList.appendChild(addToMenu);
  this.ingredientList.appendChild(price);

this.ingredientList.setAttribute("class","ingredientList");  
container[0].appendChild(this.ingredientList)



/* 
  [{ 
    'name':'round Brie cheese',
    'quantity':10,
    'unit':'g',
    'price':8
    } */
}