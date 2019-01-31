$(function() {
  class GeneralStateController{
    constructor(){
      this.views = {};
      this.observers = {};
    }
    /*
    List of ViewNames
    "sidebarView",
    "overviewView"
    "printView",
    "contentView",
    "detailsView",
    */
   addView(name,v){
     if(this.views.length===1){
       
    }
    //this.views.({key:v});
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
      this.views.contentView.container.show()
    }
    showDishDinnerOverView(){
      this.hideAllViews()
      this.views.overviewView.container.show()
    }
    showDishDinnerPrintView(){
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


  var sidebarView = new exampleView($(".sidebar"),model);
  var dOverView = new dinnerOverView($(".overview"),model);
  var dPrintoutView = new dinnerPrintoutView($(".printout"),model);
  var contView = new contentView($(".dishSearchView"),model);
  var dishDetail = new dishDetailsView($(".detailsView"),model);
  
  genStateController.addView("sidebarView",sidebarView);
  genStateController.addView("overviewView",dOverView);
  genStateController.addView("printView",dPrintoutView);
  genStateController.addView("contentView",contView);
  genStateController.addView("detailsView",dishDetail); 

  genStateController.hideAllViews();
  genStateController.showDishSearchScreen();
 console.log("app.js",model.getFullMenu())
//genStateController.showDishDinnerPrintView();
 //genStateController.showDishDinnerOverView();


  



 	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});