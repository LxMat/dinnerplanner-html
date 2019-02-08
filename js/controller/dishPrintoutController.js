class dishPrintoutController {
  constructor(view, model, generalController) {
    view.backButton.addEventListener("click",
      () => generalController.showDishSearchScreen())
  }
}