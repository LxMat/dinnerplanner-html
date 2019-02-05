var dishItemView = function(container,model,id){
  this.id = id;
  this.model = model
  let dish = this.model.getDish(this.id);
  let dishItem = document.createElement("div");
  dishItem.setAttribute("class","dishItem card");
  dishItem.id = this.id;
  let img = document.createElement('img');
  img.height = 150;
  img.width = 150;
  img.src = `images/${dish.image}`;
  dishItem.appendChild(img);
  let dishTitle = document.createElement("p");
  dishTitle.textContent = dish.name;
  container.appendChild(dishItem);
  container.appendChild(dishTitle);

  /* let dish = model.getDish(this.id);
  
  let dishItem = document.createElement("div");
  dishItem.setAttribute("id",this.id)
  dishItem.setAttribute("class","dishItem card");
  
  let img = document.createElement('img');
  img.src = `images/${dish.image}`;
  dishItem.appendChild(img);

  let dishTitle = document.createElement("p");
  dishTitle.textContent = dish.name;

  dishItem.appendChild(dishTitle);
  container.appendChild(dishItem); */
}