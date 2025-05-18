import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js"

//////////////////////////////////////////////////////////////////
/////////////////// Editar nome e descricao /////////////////////
////////////////////////////////////////////////////////////////

const popup = document.querySelector(".popup");
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const profileName = document.querySelector(".profile__name-text");
const profileDescription = document.querySelector(".profile__description");
const popupCloseButton = document.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__name-edit-button");
const saveProfileButton = document.querySelector(".popup__submit");
const profileForm = document.querySelector(".popup__form");

function getElements() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function setElements(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

// Abre e fecha Popup
function openPopup() {
  popup.classList.remove("popup_hidden");
  getElements();
}

function closePopup() {
  popup.classList.add("popup_hidden");
}

getElements();

popupCloseButton.addEventListener("click", closePopup);
editButton.addEventListener("click", openPopup);
profileForm.addEventListener("submit", setElements);

/////////////////////////////////////////////////////////////
//////////////// adiciona o new place popup ////////////////
///////////////////////////////////////////////////////////

const newPlace = document.querySelector(".new-place");
const newPlaceCloseButton = document.querySelector(".new-place__close-button");
const openNewPlaceButton = document.querySelector(".profile__add-button");
function openNewPlace() {
  newPlace.classList.remove("new-place_hidden");
}
function closeNewPlace() {
  newPlace.classList.add("new-place_hidden");
}

newPlaceCloseButton.addEventListener("click", closeNewPlace);
openNewPlaceButton.addEventListener("click", openNewPlace);

/////////////////////////////////////////////////////////////
//////////////// adiciona o image popup close button ///////
///////////////////////////////////////////////////////////

function closeImagePopup() {
  document.querySelector(".image-popup").classList.add("image-popup_hidden");
}

const imageCloseButton = document.querySelector(".image-popup__close-button");
imageCloseButton.addEventListener("click", closeImagePopup);

////////////////////////////////////////////////////////////////////////
///////////////// Elementos iniciais do Array ///////////////////
//////////////////////////////////////////////////////////////////////

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
    const template = new Card(card.name,card.link,"elements__template-card")
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

renderCard();
// enableValidation({
//   formSelector: ".new-place__form",
//   inputSelector: ".new-place__form-elements",
//   submitButtonSelector: ".new-place__submit",
//   inactiveButtonClass: "new-place__submit_inactive",
// });
// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__form-elements",
//   submitButtonSelector: ".popup__submit",
//   inactiveButtonClass: "popup__submit_inactive",
// });



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


