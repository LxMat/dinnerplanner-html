class searchViewController{
  constructor(view, model,generalController) {
    this.view = view;
    this.model = model;
    this.generalController = generalController;
    this.addEventDishItems() 
  
     view.searchButton.addEventListener("click", 
         () => {view.update(model);
          this.addEventDishItems();      
        } );
   
     view.textSearch.addEventListener("keyup", 
       event => {
         if(event.keyCode===13)  view.update(model)
         this.addEventDishItems();
        }
       );
  }
  addEventDishItems(){
    this.view.container[0].querySelectorAll(".dishItem")
    .forEach(dishItem => dishItem.addEventListener("click",
       ()=>{ 
          this.model.setCurrentDish(dishItem.id)
          this.generalController.dishSelected();
       }
     )
 );
  }
    
}