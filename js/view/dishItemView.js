var dishItemView = function(container,id,model){
  
  let dish = model.getDish(id);
  
  let dishItem = document.createElement("div");
  dishItem.setAttribute("class","card dishItem");
  
  
  let img = document.createElement('img');
  img.src = `images/${dish.image}`;
  dishItem.appendChild(img);

  let dishTitle = document.createElement("p");
  dishTitle.textContent = dish.name;

  dishItem.appendChild(dishTitle);
  container.appendChild(dishItem);
}