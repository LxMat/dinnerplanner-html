var dinnerPrintoutView = function(container,model){
  this.lorem = "	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est velit rerum ex. Ratione repudiandae praesentium et porro non nam quos explicabo a veniam distinctio incidunt ipsam corporis, eveniet, asperiores dicta. "

  this.container = container;  
  this.menu = model.getFullMenu();
  
  this.totalPrice = model.getTotalMenuPrice();
  
  let overViewInfo = document.createElement("div");
  let myDinner = document.createElement("span");
  let backButton = document.createElement("input");
  
  myDinner.innerHTML = `My dinner: ${model.getNumberOfGuests()} people`;
  backButton.setAttribute("type", "button");
  backButton.setAttribute("value", "go back and edit dinner");
  
  overViewInfo.appendChild(myDinner);
  overViewInfo.appendChild(backButton);
  container[0].appendChild(overViewInfo);
  
  let printout = document.createElement("div");
  
  this.menu.forEach(dish => {
    let dishInfo = document.createElement("div");
    dishInfo.setAttribute("class","row")
    
    let dishSummary = document.createElement("div");
    dishSummary.setAttribute("class","col");
    let dishPreparation = document.createElement("div");
    dishPreparation.setAttribute("class","col");
    
    let dishImage = document.createElement("img");
    dishImage.src = `images/${dish.image}`;
    dishImage.setAttribute("class","col-sm1")
    let dishTitle = document.createElement("h2");
    dishTitle.innerText = dish.name;
    
    let dishDescription = document.createElement("div");
    dishDescription.innerText = this.lorem;
    
    dishSummary.appendChild(dishImage);
    dishDescription.prepend(dishTitle);
    dishSummary.appendChild(dishDescription);
    
    let preparationHeader = document.createElement("h2");
    preparationHeader.innerText = "PREPARATION";
    
    let preparationText = document.createElement("div");
    preparationText.innerText = dish.description;
    
    dishPreparation.appendChild(preparationHeader);
    dishPreparation.appendChild(preparationText);
    

    
    dishInfo.appendChild(dishSummary);
    dishInfo.appendChild(dishPreparation);
    
    printout.appendChild(dishInfo);
  });
  
  container[0].appendChild(printout);
  
}