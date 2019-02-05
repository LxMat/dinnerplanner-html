class dinnerOverView{
  constructor(container,model){
  this.container = container;
  this.model = model;
  this.menu = model.getFullMenu();
  
  this.totalPrice = model.getTotalMenuPrice();
  this.oInfoDiv = container[0].querySelector(".overviewInfo");
  this.menuDiv = container[0].querySelector(".menu");
  let overViewInfo = document.createElement("div");
  this.myDinner = document.createElement("span");
  this.backButton = document.createElement("input");
  
  this.myDinner.innerHTML = `My dinner: ${model.getNumberOfGuests()} people`;
  this.backButton.setAttribute("type", "button");
  this.backButton.setAttribute("value", "go back and edit dinner");
  this.backButton.setAttribute("class","btn btn-sm btn-primary")

  overViewInfo.appendChild(this.myDinner);
  overViewInfo.appendChild(this.backButton);
  this.oInfoDiv.appendChild(overViewInfo);

  
  
  
  this.menu.forEach(dish => {
    let dItem = document.createElement("div");
    dItem.setAttribute("class","mx-auto")
    let dItemView = new dishItemView(dItem,model,dish.id);
    let price = model.dishPrice(dish.ingredients);
    let spanE = document.createElement("span");
    spanE.innerText = `SEK ${price*this.model.getNumberOfGuests}`;
    dItem.appendChild(spanE);
    this.menuDiv.appendChild(dItem)
  });
  let priceD = document.createElement("div");
  priceD.innerHTML = `Total <br/> ${this.totalPrice}`;
  this.menuDiv.appendChild(priceD);

  this.printReceiptButton = document.createElement("input");
  this.printReceiptButton.setAttribute("type", "button");
  this.printReceiptButton.setAttribute("value", "Print Full Receipt");
  this.printReceiptButton.setAttribute("class", "btn btn-sm btn-success")
  container[0].appendChild(this.printReceiptButton);

  
  this.model.addObserver(this.update.bind(this));
}

update(model,changeDetails){
    this.menuDiv.innerHTML ="";
    this.menu = model.getFullMenu();
    this.totalPrice = model.getTotalMenuPrice();
    let overViewInfo = document.createElement("div");
    this.myDinner.innerHTML = `My dinner: ${model.getNumberOfGuests()} people`;

    this.menu.forEach(dish => {
      let dItem = document.createElement("div");
      dItem.setAttribute("class","mx-auto")
      let dItemView = new dishItemView(dItem,model,dish.id);
      let price = model.dishPrice(dish.ingredients);
      let spanE = document.createElement("span");
      
      spanE.innerText = `SEK ${price*this.model.getNumberOfGuests()}`;
      dItem.appendChild(spanE);
      this.menuDiv.appendChild(dItem)
    });
  }
}