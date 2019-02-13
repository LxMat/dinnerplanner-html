class errorView{
  constructor(container,model){
    this.container = container
    this.error = document.createElement("div");
    this.error.innerText = "no internet, friend <3"
    this.error.className="text-danger"
  }
  show(){
    this.container[0].appendChild(this.error)
    this.container.show();
  }
}