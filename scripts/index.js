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
function toggleNewPlace() {
  newPlace.classList.toggle("new-place_hidden");
}

newPlaceCloseButton.addEventListener("click", toggleNewPlace);
openNewPlaceButton.addEventListener("click", toggleNewPlace);

/////////////////////////////////////////////////////////
///////////////// Cria cartao com botao  ///////////////
///////////////////////////////////////////////////////

const buttonCreate = document.querySelector(".new-place__submit");
const template = document.getElementById("elements__template-card");
const elements = document.querySelector(".elements");

const title = document.querySelector(".new-place__form-element-title");
const url = document.querySelector(".new-place__form-element-url");

function CreateCard() {
  const cloneTemplate = template.content.cloneNode(true); ////// clona o template para nao modificar diretamente
  cloneTemplate.querySelector(".elements__text").textContent = title.value; ////// altera os valores do titulo e do url
  cloneTemplate.querySelector(".elements__image").src = url.value;
  elements.append(cloneTemplate); ////// insere os valores do clone no layout
  url.value = ""; ////// limpa os valores do input
  title.value = ""; ////// limpa os valores do input
  toggleNewPlace();
  canRemoveCard();
  canHeart();
}

buttonCreate.addEventListener("click", CreateCard);

////////////////////////////////////////////////////////////////////////
///////////////// Adiciona cards que estão no array ///////////////////
//////////////////////////////////////////////////////////////////////

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

////////////////////////////////////////////////////////////
/////////////// Adiciona o array ao layout ////////////////
//////////////////////////////////////////////////////////

for (let i = 0; i < initialCards.length; i++) {
  const cloneTemplate = template.content.cloneNode(true);
  cloneTemplate.querySelector(".elements__text").textContent =
    initialCards[i].name;
  cloneTemplate.querySelector(".elements__image").src = initialCards[i].link;
  elements.append(cloneTemplate);
}

//////////////////////////////////////////////////////////////
////////////// Deletar elementos com lixeira ////////////////
////////////////////////////////////////////////////////////

function canRemoveCard() {
  const cards = document.querySelectorAll(".elements__delete");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.parentNode.remove();
    });
  });
}

canRemoveCard(); //Verifica os elementos existentes
canHeart();
////////////////////////////////////////////////////////////////
///////////////// Heart alterna para heart active//////////////
//////////////////////////////////////////////////////////////
function canHeart() {
  const heartButton = document.querySelectorAll(".elements__heart");
  heartButton.forEach((heart) => {
    heart.addEventListener("click", function () {
      heart.classList.toggle("elements__heart_active");
    });
  });
}

////////////////////////////////////////////////////////////
///////////// Criar popup window para imagens /////////////
//////////////////////////////////////////////////////////
////////Recriar as funcoes que manipulam os cards para que o createCard consiga lidar com os dados diretamente do array initialCards, Adicionar um heart:boolean ao array e if true{elements__heart-active},if false {elements__heart-active}. DeleteCard remove cards diretamente do array initialCards.
