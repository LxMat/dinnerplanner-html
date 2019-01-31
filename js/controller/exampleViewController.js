class ExampleViewController{
  constructor(view, model) {
 
     view.plusButton.addEventListener("click", 
         () => {model.setNumberOfGuests(model.getNumberOfGuests() + 1)} );
     view.minusButton.addEventListener("click", 
         () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
   }
 }