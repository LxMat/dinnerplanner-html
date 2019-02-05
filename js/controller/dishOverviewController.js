class dishOverviewController{
  constructor(view,model,generalController){
    view.backButton.addEventListener("click",
      ()=> generalController.showDishSearchScreen())
    view.printReceiptButton.addEventListener("click",
      ()=> generalController.showDinnerPrintScreen())
  }


}