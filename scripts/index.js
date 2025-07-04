import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js"
import { closeNewPlace } from "./utils.js"
import { Api } from "./Api.js"




// const initialCards = [
//   {
//     name: "Vale de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//     isLiked: false,
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
//     isLiked: false,
//   },
//   {
//     name: "Montanhas Carecas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
//     isLiked: false,
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
//     isLiked: false,
//   },
//   {
//     name: "Parque Nacional da Vanoise ",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
//     isLiked: false,
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
//     isLiked: false,
//   },
// ];


const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4fe3b6e2-c8d9-4e4d-8a1e-c00cea17e8fc",
    "Content-Type": "application/json"
  }
}
)


//////////////////////////////////////////////////////////////////////////////
////////////////// Renderizador de cartões///////////////////////////
///////////////////////////////////////////////////////////////

// const formNewPlace = document.querySelector(".new-place__form");
// const elements = document.querySelector(".elements__cards");

// function renderCard() {
//   elements.innerHTML = ""; // Limpa o contêiner de cards

//   initialCards.forEach((card) => {
//     const template = new Card(card.name, card.link, "elements__template-card", (name, link) => {
//       document.querySelector(".image-popup__title").textContent = name;
//       document.querySelector(".image-popup__content").src = link;
//       document.querySelector(".image-popup").classList.remove("image-popup_hidden")
//     })

//     // Adiciona o card ao contêiner
//     elements.prepend(template.getCard());
//   });
// }
const formNewPlace = document.querySelector(".new-place__form");
const elements = document.querySelector(".elements__cards");

function renderCard() {
  elements.innerHTML = "";
  api.getInitialCards()
    .then((cards) => {
      cards.forEach(
        (card) => {
          console.log(card)
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

// getElements()
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

/// acho que falta eu colocar o alternador 
// de like para mudar o estado do isLiked
//  para false e de tentar identificar
//  e apagar o card