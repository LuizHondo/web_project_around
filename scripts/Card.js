export class Card{
    constructor(text,link,templateSelector){
        this._text = text;
        this._link = link;
        this._templateSelector = templateSelector;
    }
    
    _setEventListeners(){
        this._template.querySelector(".elements__image")
            .addEventListener("click", () => {
                document.querySelector(".image-popup__title").textContent = this._text;
                document.querySelector(".image-popup__content").src = this._link;
                document.querySelector(".image-popup").classList.remove("image-popup_hidden")
            });
        this._template.querySelector(".elements__delete")
            .addEventListener("click", () => {
                this._template.remove()
            });
        const heart = this._template.querySelector(".elements__heart");
        if (this.heart){
            heart.classList.add("elements__heart_active");
        }
        heart.addEventListener("click", function () {
        this.heart = !this.heart;
        heart.classList.toggle("elements__heart_active");
        });
        
    }
    
    _createCard(){
        this._template = document.getElementById(this._templateSelector).content.querySelector(".elements__card").cloneNode(true); //cria clone do template com o seletor de template
        this._template.querySelector(".elements__text").textContent = this._text;
        this._template.querySelector(".elements__image").src = this._link;
        this._setEventListeners();
        return this._template;
    }
    
    getCard(){
        return this._createCard()
    }
}