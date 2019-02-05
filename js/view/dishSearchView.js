var searchView = function (container, model) {
  this.container = container


  this.createImgElems = function (dishes) {
    let div = document.createElement('div');
    div.setAttribute("class", "dishItemView");
    this.searchResult = container[0].querySelector(".searchResult");
    this.searchResult.innerHTML = "";

    dishes.forEach(dish => {
      let dishItem = document.createElement("div");

      let dItem = document.createElement("div");
      dItem.setAttribute("class", "dishItemContainer p-2")

      let dItemView = new dishItemView(dishItem, model, dish.id);
      this.searchResult.appendChild(dishItem);
    });


  }



  this.model = model;
  this.dishes = this.model.getDishes();
  this.dish = this.dishes[0];
  this.createImgElems(this.dishes);

  this.textSearch = container.find(".textSearch")[0];
  this.selectSearch = container.find(".selectSearch")[0];
  this.searchButton = container.find(".searchButton")[0];

  this.update = function (model, changedetails) {

    let selectedValue = this.selectSearch.options[this.selectSearch.selectedIndex].value;
    let searchedDishes = model.searchDishes(selectedValue, this.textSearch.value);
    this.createImgElems(searchedDishes);

  }




}