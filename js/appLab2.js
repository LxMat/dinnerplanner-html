$(function() {

  class GeneralStateController{
    constructor(){
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

  addView(name,v){
    this.views[name] = v;
  };   
  hideAllViews(){
      for(let key in this.views){
        this.views[key].container.hide();
      }
    };
  getViews(){
    return this.views;
  }
  showDishDetailsScreen(){
    this.hideAllViews()
    this.views.sidebarView.container.show()
    this.views.detailsView.container.show()
  }
  showDishSearchScreen(){
    this.hideAllViews()
    this.views.sidebarView.container.show()
    this.views.searchView.container.show()
  }
  showDishDinnerOverScreen(){
    this.hideAllViews()
    this.views.overviewView.container.show()
  }
  showDinnerPrintScreen(){
    this.hideAllViews()
    this.views.printView.container.show()
  }

}
  
  //We instantiate our model
	var model = new DinnerModel(); 
  var genStateController = new GeneralStateController();
  

  model.addDishToMenu(1); 
  model.addDishToMenu(101);
  model.setNumberOfGuests(2); 

  //instantiate the views
  var sidebarView = new exampleView($(".sidebar"),model);
  var dOverView = new dinnerOverView($(".overview"),model);
  var dPrintoutView = new dinnerPrintoutView($(".printout"),model);
  var searchV = new searchView($(".dishSearchView"),model);
  var dishDetailV = new dishDetailsView($(".detailsView"),model);
  
  genStateController.addView("sidebarView",sidebarView);
  genStateController.addView("overviewView",dOverView);
  genStateController.addView("printView",dPrintoutView);
  genStateController.addView("searchView",searchV);
  genStateController.addView("detailsView",dishDetailV); 

  var exampleVController = new ExampleViewController(sidebarView,model,genStateController);
  var dishDetailsVController = new dishDetailsViewController(dishDetailV,model,genStateController);
  var searchVController = new searchViewController(searchV,model,genStateController);
  var prinoutController = new dishPrintoutController(dPrintoutView,model,genStateController);
  var overviewController = new dishOverviewController(dOverView,model,genStateController);  

  genStateController.hideAllViews();
  this.welcomeDiv = document.querySelector("#welcome-wrapper")
  this.welcomebtn = document.querySelector("#welcomebtn");
  this.welcomebtn.addEventListener("click",
    ()=>{this.welcomeDiv.style.display = "none";
        genStateController.showDishSearchScreen();
    })

//  genStateController.showDishSearchScreen();
  //genStateController.showDishDinnerPrintView();
 //genStateController.showDishDinnerOverView();


  



 	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});