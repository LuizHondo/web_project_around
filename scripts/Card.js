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
    constructor(text,link, id,isLiked,templateSelector, handleCardClick){
        this._text = text;
        this._link = link;
        this._id = id;
        this._isLiked = isLiked;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _setEventListeners(){

        this._template.querySelector(".elements__image").addEventListener("click", () => {
            this._handleCardClick(this._text, this._link);
        });
        
        this._template.querySelector(".elements__delete")
            .addEventListener("click", () => {

                api.deleteCard(this._id).
                    then(this._template.remove())
            });
        
       
        this._template.querySelector(".elements__heart").addEventListener("click", () => {

            if (this._isLiked){
                api.unlikeCard(this._id)
                .then(() =>{         
                    this._isLiked = false;
                    likeButton.classList.remove("elements__heart_active")
                    }
                )
                .catch(()=>console.error("Erro ao descurtir:",err))
            }
            else{
                api.likeCard(this._id)
                .then(()=>{
                    this._isLiked = true;
                    likeButton.classList.add("elements__heart_active")
                    }
                )
                .catch((err)=>console.error("Erro ao curtir:",err))
            }
        });
    }
    _createCard(){
        this._template = document.getElementById(this._templateSelector).content.querySelector(".elements__card").cloneNode(true); //cria clone do template com o seletor de template
        this._template.querySelector(".elements__text").textContent = this._text;
        this._template.querySelector(".elements__image").src = this._link;
        const likeButton = this._template.querySelector(".elements__heart");
        if(this._isLiked){
            likeButton.classList.add("elements__heart_active")
        }
        else{
            likeButton.classList.remove("elements__heart_active")
        }
        this._setEventListeners();
        return this._template;
    }
    
    getCard(){
        return this._createCard()
    }
}