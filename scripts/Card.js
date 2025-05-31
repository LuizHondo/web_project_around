export class Card{
    constructor(text,link,templateSelector, handleCardClick){
        this._text = text;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _setEventListeners(){
        this._template.querySelector(".elements__image").addEventListener("click", () => {
            this._handleCardClick(this._text, this._link);
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