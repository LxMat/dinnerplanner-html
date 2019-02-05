

class dishDetailsView{
  constructor(container,model){
  this.container = container;
  this.ingregientsDiv = container[0].querySelector(".ingredients");
  
  this.model = model;
  this.dishContainer = container;
  
  this.nGuests = this.model.numberGuests;
  this.dish = this.model.getCurrentDish();
  this.ingredients = this.dish.ingredients;
  

  this.dishDetails = container[0].querySelector(".dishDetails");
  
  let dishContent = document.createElement("div");
  dishContent.setAttribute("class","dishContent");
  
  let dHeader = document.createElement("h2")
  let dImg = document.createElement("img");
  let dishDesc = document.createElement("p");
  this.dbackButton = document.createElement("input");
  
  dHeader.innerHTML = this.dish.name;
  dImg.src=`images/${this.dish.image}`;
  dishDesc.innerHTML =  this.dish.description;
  this.dbackButton.setAttribute("type","button");
  this.dbackButton.setAttribute("value","back to search");
  this.dbackButton.setAttribute("class","btn btn-sm btn-primary");
  
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
  table.setAttribute("class","table");
  
  this.ingredients.forEach(ingredient => {
    let row = document.createElement("tr");
    let quantTR =  document.createElement("td");
    let unitTR =  document.createElement("td");
    let nameTR =  document.createElement("td");
    let priceTR =  document.createElement("td");

    sum += ingredient.price;
    
    quantTR.innerText= ingredient.quantity
    unitTR.innerText=ingredient.unit
    nameTR.innerText=ingredient.name
    priceTR.innerText=`SEK ${ingredient.price}`
    
    row.appendChild(quantTR)
    row.appendChild(unitTR)
    row.appendChild(nameTR)
    row.appendChild(priceTR)

    table.appendChild(row);
    //this.ingredientList.appendChild(p);
  });

  this.ingredientList.appendChild(table);

  this.addToMenu = document.createElement("input");
  this.addToMenu.setAttribute("type","button");
  this.addToMenu.setAttribute("value","Add to menu");
  this.addToMenu.setAttribute("class","btn btn-sm btn-success");
  let price = document.createElement("span")



  price.innerHTML = `SEK ${sum}`;
  this.ingredientList.appendChild(this.addToMenu);
  this.ingredientList.appendChild(price);

  this.ingredientList.setAttribute("class","ingredientList");  
  this.ingregientsDiv.appendChild(this.ingredientList)


 model.addObserver(this.update.bind(this));
}

 update(model, changedetails){
  this.ingregientsDiv.innerHTML ="";
  
  this.nGuests = this.model.numberGuests;
  this.dish = this.model.getCurrentDish();
  this.ingredients = this.dish.ingredients;
  
  this.dishDetails.innerHTML = "";
  
  let dishContent = document.createElement("div");
  dishContent.setAttribute("class","dishContent");
  
  let dHeader = document.createElement("h2")
  let dImg = document.createElement("img");
  let dishDesc = document.createElement("p");
 
  
  dHeader.innerHTML = this.dish.name;
  dImg.src=`images/${this.dish.image}`;
  dishDesc.innerHTML =  this.dish.description;
  
  dishContent.appendChild(dHeader);
  dishContent.appendChild(dImg);
  dishContent.appendChild(dishDesc);
  dishContent.appendChild(this.dbackButton);
  this.dishDetails.appendChild(dishContent);


  this.ingredientList.innerHTML = "";
  let th = document.createElement("th");
  th.innerHTML = `Ingredients for ${this.nGuests} people`
  let sum = 0;
  let table = document.createElement("table");
  table.appendChild(th);
  table.setAttribute("class","table");
  
  this.ingredients.forEach(ingredient => {
    let row = document.createElement("tr");
    let quantTR =  document.createElement("td");
    let unitTR =  document.createElement("td");
    let nameTR =  document.createElement("td");
    let priceTR =  document.createElement("td");

    sum += ingredient.price;
    
    quantTR.innerText= ingredient.quantity
    unitTR.innerText=ingredient.unit
    nameTR.innerText=ingredient.name
    priceTR.innerText=`SEK ${ingredient.price}`    
    row.appendChild(quantTR)
    row.appendChild(unitTR)
    row.appendChild(nameTR)
    row.appendChild(priceTR)
    table.appendChild(row);
  });

  this.ingredientList.appendChild(table);
  let price = document.createElement("span")



  price.innerHTML = `SEK ${sum}`;
  this.ingredientList.appendChild(this.addToMenu);
  this.ingredientList.appendChild(price);

  this.ingredientList.setAttribute("class","ingredientList");  
  this.ingregientsDiv.appendChild(this.ingredientList)

 }
}