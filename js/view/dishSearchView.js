

var contentView = function(container,model){
  this.createImgElems = function(dishes){
  let div = document.createElement('div');
  div.setAttribute("class","dishItemView");
  this.searchResult = container[0].querySelector(".searchResult");   
  
    dishes.forEach(dish => {
      /* let dishItem = document.createElement("div");
      dishItem.setAttribute("class","dishItem");
      let img = document.createElement('img');
      img.src = `images/${dish.adress}`;
      dishItem.appendChild(img);
      let dishTitle = document.createElement("p");
      dishTitle.textContent = dish.name;
      dishItem.appendChild(dishTitle); */
      let dItem = document.createElement("div");
      dItem.setAttribute("class","dishItemContainer p-2")
      let dItemView = new dishItemView(dItem,dish.id,model);
      let dishItem = this.dishItemView(model, dish.id);
      div.appendChild(dishItem);
      //container[0].appendChild(div);
      this.searchResult.appendChild(dItem);
    });
    
    
    
  }
  
  
  //will be moved to a separate file.
  this.dishItemView = function(model,id){
    let dish = model.getDish(id);
    let dishItem = document.createElement("div");
    dishItem.setAttribute("class","dishItem");
    let img = document.createElement('img');
    img.src = `images/${dish.image}`;
    dishItem.appendChild(img);
    let dishTitle = document.createElement("p");
    dishTitle.textContent = dish.name;
    dishItem.appendChild(dishTitle);
    return dishItem;
  }
  
  this.model = model;
  this.dishes = this.model.getDishes();
  this.dish = this.dishes[0];
  this.createImgElems(this.dishes);
}
