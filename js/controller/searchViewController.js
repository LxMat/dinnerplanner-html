class searchViewController {
  constructor(view, model, generalController) {
    this.view = view;
    this.model = model;
    this.generalController = generalController;
    this.addEventDishItems()

    view.searchButton.addEventListener("click",
      () => {

        this.submitTextEntry();
        view.update(model)
        .then(this.addEventDishItems())
        .catch(console.log)
      });

    view.textSearch.addEventListener("keyup",
      event => {
        if (event.keyCode === 13) {
          this.submitTextEntry();
          view.update(model)
          .then(this.addEventDishItems())
        };
      }
    );
  }
  submitTextEntry() {
    let entry = this.view.container[0].querySelector(".textSearch").value;
    let type = this.view.container[0].querySelector(".selectSearch").value;
    this.model.updateQuery(entry,type)
  }

  addEventDishItems() {
    this.view.container[0].querySelectorAll(".dishItem")
      .forEach(dishItem => dishItem.addEventListener("click",
        () => {
          this.model.setCurrentDish(dishItem.id)
          this.generalController.dishSelected();
        }
      ));
  }

}