import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js"
import { closeNewPlace } from "./utils.js"

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    heart: false,
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    heart: false,
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    heart: false,
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    heart: false,
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    heart: false,
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    heart: false,
  },
];

//////////////////////////////////////////////////////////////////////////////
////////////////// Renderizador de cartoes///////////////////////////
///////////////////////////////////////////////////////////////

const formNewPlace = document.querySelector(".new-place__form");
const elements = document.querySelector(".elements__cards");

function renderCard() {
  elements.innerHTML = ""; // Limpa o contêiner de cards

  initialCards.forEach((card, i) => {
    const template = new Card(card.name, card.link, "elements__template-card", (name, link) => {
      document.querySelector(".image-popup__title").textContent = name;
      document.querySelector(".image-popup__content").src = link;
      document.querySelector(".image-popup").classList.remove("image-popup_hidden")
    })

    // Adiciona o card ao contêiner
    elements.prepend(template.getCard());
  });
}

function addCard() {
  const cardName = document.getElementById("new-place_title").value;
  const cardLink = document.getElementById("new-place_link").value;
  initialCards.push({
    name: cardName,
    link: cardLink,
    heart: false,
  }); // Adiciona o card ao array
  
  closeNewPlace();
  renderCard(); //Re renderiza os cards
  document.getElementById("new-place_title").value = ""; // Limpa o input
  document.getElementById("new-place_link").value = ""; // Limpa o input
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


