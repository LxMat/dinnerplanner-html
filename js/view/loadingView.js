class loadingView{
  constructor(container,model){
    this.container = container;
    //let loaderDiv = document.createElement("div")
    // loaderDiv.setAttribute("class", "loader")
    // let spinner = document.createElement("img")
    // spinner.src = 'image/infinity.png'
    // loaderDiv.appendChild(spinner)
    // container[0].appendChild(loaderDiv);

    model.addObserver(this.update.bind(this))
  }
  update(model,changeDetails){
    if(model.loadingDone){
      console.log("loadingDone")
      this.container.hide() 
     } else{
      console.log("loading")
      this.container.show() 
    } 
  }
  
}