var dinnerPrintoutView = function(container,model){
  this.lorem = "	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est velit rerum ex. Ratione repudiandae praesentium et porro non nam quos explicabo a veniam distinctio incidunt ipsam corporis, eveniet, asperiores dicta. "

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

    let dishSummary = document.createElement("div");
    let dishPreparation = document.createElement("div");
    
    let dishImage = document.createElement("img");
    dishImage.src = `images/${dish.image}`;

    let dishTitle = document.createElement("h2");
    dishTitle.innerText = dish.name;

    let dishDescription = document.createElement("div");
    dishDescription.innerText = this.lorem;

    dishSummary.appendChild(dishImage);
    dishSummary.appendChild(dishTitle);
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