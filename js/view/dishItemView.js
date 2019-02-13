// id: 1073176
// image: "no-knead-pizza-dough-pizza-margherita-1073176.jpg"
// imageUrls: ["no-knead-pizza-dough-pizza-margherita-1073176.jpg"]
// readyInMinutes: 25
// servings: 5
// title: "No Knead Pizza Dough – Pizza Margherita"

var dishItemView = function (container, model, dish) {
  //let dish = this.model.getDish(this.id);
  let dishItem = document.createElement("div");
  dishItem.setAttribute("class", "dishItem card loading");
  dishItem.id = dish.id;
  let img = document.createElement('img');
  img.height = 150;
  img.width = 150;
  img.src = "images/infinity.png"
  img.src = `https://www.spoonacular.com/recipeImages/${dish.image}`;
  dishItem.appendChild(img);
  let dishTitle = document.createElement("p");
  let dishText = (dish.title.length>15)?`${dish.title.slice(0,15)}..`:dish.title;
  dishTitle.textContent = dishText;
  container.appendChild(dishItem);
  container.appendChild(dishTitle);
}