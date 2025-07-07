import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js"
import { closeNewPlace,getElements } from "./utils.js"
import { Api } from "./Api.js"

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4fe3b6e2-c8d9-4e4d-8a1e-c00cea17e8fc",
    "Content-Type": "application/json"
  }
}
)


const formNewPlace = document.querySelector(".new-place__form");
const elements = document.querySelector(".elements__cards");

function renderCard() {
  elements.innerHTML = "";
  api.getInitialCards()
    .then((cards) => {
      cards.forEach(
        (card) => {
          const template = new Card(card.name, card.link, card._id, card.isLiked ,"elements__template-card", (name, link) => {
          document.querySelector(".image-popup__title").textContent = name;
          document.querySelector(".image-popup__content").src = link;
          document.querySelector(".image-popup").classList.remove("image-popup_hidden")
        })
        // Adiciona o card ao contêiner
        elements.prepend(template.getCard());
          }
        )
      }
    ).catch((err) => {console.log(err)})
}

function addCard() {
  const cardName = document.getElementById("new-place_title").value;
  const cardLink = document.getElementById("new-place_link").value;
  api.addCard({
    name: cardName,
    link: cardLink,
    isLiked: false
  }) // Adiciona o card ao array
  .then(() => {
    closeNewPlace()
    renderCard()
    document.getElementById("new-place_title").value = ""; // Limpa o input
    document.getElementById("new-place_link").value = ""; // Limpa o input
  })
  .catch((err) => {`Erro ao carregar o card: ${err}`});
}

formNewPlace.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o recarregamento da página
  addCard(); // Adiciona o card
});

getElements();
renderCard();


const newPlaceForm = document.querySelector(".new-place__form");
const popupForm = document.querySelector(".popup__form");


const newPlaceValidator = new FormValidator(
  { 
    inputSelector: ".new-place__form-elements",
    submitButtonSelector: ".new-place__submit",
    inactiveButtonClass: "new-place__submit_inactive",}
  ,newPlaceForm);
newPlaceValidator.enableValidation();

const popupValidator = new FormValidator({
  inputSelector: ".popup__form-elements",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",}
  ,popupForm);
popupValidator.enableValidation();

