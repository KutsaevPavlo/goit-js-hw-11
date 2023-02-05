export default class LoadMoreBtn{
    constructor(selector, isHiden = true){
    this.button = this.getButton(selector);
    if(isHiden) this.hide();
    }

    getButton(selector){
        return document.querySelector(selector);
    }

    hide(){
        this.button.classList.add("hidden");
    }

    show(){
        this.button.classList.remove("hidden");
    }

    enable(){
        this.button.disabled = false;
        this.button.textContent = "Load more";
    }
    disable(){
        this.button.disabled = true;
        this.button.textContent = "Loading";
    }
}

