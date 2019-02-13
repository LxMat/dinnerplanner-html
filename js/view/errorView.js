class errorView{
  constructor(container,model){
    this.container = container
    this.error = document.createElement("div");
    error.innerText = "no internet dudde"
  }
  show(){
    this.container[0].appendChild(this.error)
  }
}