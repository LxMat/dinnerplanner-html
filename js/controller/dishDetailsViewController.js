class dishDetailsViewController {
  constructor(view, model, generalController) {
    view.addToMenu.addEventListener("click",
      () => {
        model.addDishToMenu(model.getCurrentDish().id);
      });
    view.dbackButton.addEventListener("click",
      () => {
        generalController.showDishSearchScreen()
      })
  }
}