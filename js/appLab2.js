$(function () {

  class GeneralStateController {
    constructor() {
      this.views = {};
      this.observers = {};
    }

    /*
    List of ViewNames:
    "sidebarView",
    "overviewView"
    "printView",
    "searchView",
    "detailsView",
    */

    addView(name, v) {
      this.views[name] = v;
    };
    hideAllViews() {
      for (let key in this.views) {
        this.views[key].container.hide();
      }
    };
    getViews() {
      return this.views;
    }
    dishSelected() {
      this.hideAllViews()
      this.views.sidebarView.container.show()
      this.views.detailsView.container.show()
    }
    showDishSearchScreen() {
      this.hideAllViews()
      this.views.sidebarView.container.show()
      this.views.searchView.container.show()
    }
    showDishDinnerOverScreen() {
      this.hideAllViews()
      this.views.overviewView.container.show()
    }
    showDinnerPrintScreen() {
      this.hideAllViews()
      this.views.printView.container.show()
    }
    showError(){
      this.hideAllViews();
      //console.log("errorv",this.errorView);
      this.views.errorView.show()
    }
  }

  //We instantiate our model
  var model = new DinnerModel();
  var genStateController = new GeneralStateController();
  model.setNumberOfGuests(2);

  //instantiate the views
  var sidebarV = new sidebarView($(".sidebar"), model);
  var dOverView = new dinnerOverView($(".overview"), model);
  var dPrintoutView = new dinnerPrintoutView($(".printout"), model);
  var searchV = new searchView($(".dishSearchView"), model);
  var dishDetailV = new dishDetailsView($(".detailsView"), model);
  var errorV = new errorView($(".error"),model)
  var loader = $("#loading")
  loader.hide();

  genStateController.addView("sidebarView", sidebarV);
  genStateController.addView("overviewView", dOverView);
  genStateController.addView("printView", dPrintoutView);
  genStateController.addView("searchView", searchV);
  genStateController.addView("detailsView", dishDetailV);
  genStateController.addView("errorView", errorV);



  var sidebarVController = new sidebarViewController(sidebarV, model, genStateController);
  var dishDetailsVController = new dishDetailsViewController(dishDetailV, model, genStateController);
  var searchVController = new searchViewController(searchV, model, genStateController);
  var prinoutController = new dishPrintoutController(dPrintoutView, model, genStateController);
  var overviewController = new dishOverviewController(dOverView, model, genStateController);

  genStateController.hideAllViews();
  genStateController.showDishSearchScreen();



  // this.welcomeDiv = document.querySelector("#welcome-wrapper")
  // this.welcomebtn = document.querySelector("#welcomebtn");
  // this.welcomebtn.addEventListener("click",
  //   ()=>{this.welcomeDiv.style.display = "none";
  //       genStateController.showDishSearchScreen();
  //   })


});