class searchViewController{
  constructor(view, model,generalController) {
 
     view.container[0].querySelectorAll(".dishItem")
        .forEach(dishItem => dishItem.addEventListener("click",
           ()=>{ 
              model.setCurrentDish(dishItem.id)
              generalController.showDishDetailsScreen();
           }
         )
     );
   
     view.searchButton.addEventListener("click", 
         () => {view.update(model);} );
   
     view.textSearch.addEventListener("keyup", 
       event => {
         if(event.keyCode===13)  view.update(model)
         }
       );
     
       
     }
     
     }