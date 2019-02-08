var dishItemView = function (container, model, id) {
  this.id = id;
  this.model = model
  let dish = this.model.getDish(this.id);
  let dishItem = document.createElement("div");
  dishItem.setAttribute("class", "dishItem card loading");
  dishItem.id = this.id;
  let img = document.createElement('img');
  img.height = 150;
  img.width = 150;
  img.src = "images/infinity.png"
  img.src = dish.imageURL;
  dishItem.appendChild(img);
  let dishTitle = document.createElement("p");
  console.log(typeof(dish.name))
  let dishText = (dish.name.length>20)?`${dish.name.slice(0,20)}..`:dish.name
  dishTitle.textContent = dishText;
  container.appendChild(dishItem);
  container.appendChild(dishTitle);
}