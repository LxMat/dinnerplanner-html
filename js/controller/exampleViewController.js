class ExampleViewController{
  constructor(view, model,generalController) {
 
    view.plusButton.addEventListener("click", 
      () => {model.setNumberOfGuests(model.getNumberOfGuests() + 1)} );
    view.minusButton.addEventListener("click", 
      () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
    view.confirmbtn.addEventListener("click",
      () => generalController.showDishDinnerOverScreen() );
  }
        
}