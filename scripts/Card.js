import { Api } from "./Api.js"

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4fe3b6e2-c8d9-4e4d-8a1e-c00cea17e8fc",
    "Content-Type": "application/json"
        } 
    }
)

export class Card{
    constructor(text,link, id,templateSelector, handleCardClick){
        this._text = text;
        this._link = link;
        this._id = id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _setEventListeners(){
        console.log(this._id)
        this._template.querySelector(".elements__image").addEventListener("click", () => {
            this._handleCardClick(this._text, this._link);
        });
        this._template.querySelector(".elements__delete")
            .addEventListener("click", () => {

                api.deleteCard(this._id).
                    then(this._template.remove())
            });
        const isLiked = this._template.querySelector(".elements__heart");
        if (this.isLiked){
            isLiked.classList.add("elements__heart_active");
        }
        isLiked.addEventListener("click", function () {
        this.isLiked = !this.isLiked;
        isLiked.classList.toggle("elements__heart_active");
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