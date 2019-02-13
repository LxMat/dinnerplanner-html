class searchView {
  constructor(container, model) {
    this.container = container

    //this.dishes = this.model.getDishes();
    //this.dish = this.dishes[0];
    //this.createImgElems(this.dishes);
    let noInt = document.createElement("span"); 
    noInt.innerText="no internet"; 
    noInt.className="text-danger";
    this.container[0].prepend(noInt);
    this.container.find(".text-danger").hide();

    this.textSearch = container.find(".textSearch")[0];
    this.selectSearch = container.find(".selectSearch")[0];
    this.searchButton = container.find(".searchButton")[0];
    model.addObserver(this.update.bind(this));

  }

  update(model, changedetails) {
    if (changedetails === "SearchSubmit") {
      //this.container.find("#loading").hide()
      let selectedValue = this.selectSearch.options[this.selectSearch.selectedIndex].value;
      let searchedDishes = model.getAllDishes()
        .then(response => {
          this.container.find(".text-danger").hide();
          this.createImgElems(response.results);
          this.container[0].dispatchEvent(new Event("loaded"))
        })
        .catch(e =>{this.container.find(".text-danger").show()})
    }
  }

  createImgElems(dishes) {
    console.log(dishes);
    let div = document.createElement('div');
    div.setAttribute("class", "dishItemView");
    this.searchResult = this.container[0].querySelector(".searchResult");
    this.searchResult.innerHTML = "";

    dishes.forEach(dish => {
      let dishItem = document.createElement("div");
      let dItem = document.createElement("div");
      dItem.setAttribute("class", "dishItemContainer p-2")
      let dItemView = new dishItemView(dishItem, this.model, dish);
      this.searchResult.appendChild(dishItem);
    });
  }
}