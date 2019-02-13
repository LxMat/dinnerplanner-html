class dishDetailsViewController {
  constructor(view, model, generalController) {
    view.addToMenu.addEventListener("click",
      () => {
        model.addDishToMenu(model.getCurrentDish());
      });
    view.dbackButton.addEventListener("click",
      () => {
        generalController.showDishSearchScreen()
      })
  }
}