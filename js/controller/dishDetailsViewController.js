class dishDetailsViewController{
  constructor(view, model) {
     view.addToMenu.addEventListener("click", 
         () => {model.addDishToMenu(model.currentDish.id);} );
   }
 }