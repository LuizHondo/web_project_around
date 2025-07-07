import { Api } from "./Api.js"
/// utils.js deve conter os manipuladores de eventos e
/// a função que abre/fecha as janelas modais.

//////////////////////////////////////////////////////////////////
/////////////////// Editar nome e descricao /////////////////////
const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4fe3b6e2-c8d9-4e4d-8a1e-c00cea17e8fc",
    "Content-Type": "application/json"
  }
}
)
const popup = document.querySelector(".popup");
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const profileName = document.querySelector(".profile__name-text");
const profileDescription = document.querySelector(".profile__description");
const popupCloseButton = document.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__name-edit-button");
const profileForm = document.querySelector(".popup__form");



export function getElements() {
  return api.getUserInfo().then((data)=>{
     profileName.textContent = data.name;
     profileDescription.textContent = data.about;
  })
}

function setElements(evt) {
  evt.preventDefault();
  const data = {
    name:nameInput.value,
    about:descriptionInput.value
  }
  api.updateProfile(data).
    then((res)=>{
      profileName.textContent = res.name;
      profileDescription.textContent = res.about;
      closePopup()
    })
  // profileName.textContent = nameInput.value;
  // profileDescription.textContent = descriptionInput.value;
}

// Abre e fecha Popup
function openPopup() {
  popup.classList.remove("popup_hidden");
  getElements();
}

function closePopup() {
  popup.classList.add("popup_hidden");
}

popupCloseButton.addEventListener("click", closePopup);
editButton.addEventListener("click", openPopup);
profileForm.addEventListener("submit", setElements);

//////////////// adiciona o new place popup ////////////////
///////////////////////////////////////////////////////////

const newPlace = document.querySelector(".new-place");
const newPlaceCloseButton = document.querySelector(".new-place__close-button");
const openNewPlaceButton = document.querySelector(".profile__add-button");
function openNewPlace() {
  newPlace.classList.remove("new-place_hidden");
}
export function closeNewPlace() {
  newPlace.classList.add("new-place_hidden");
}

newPlaceCloseButton.addEventListener("click", closeNewPlace);
openNewPlaceButton.addEventListener("click", openNewPlace);

//////////////// adiciona o image popup close button ///////
///////////////////////////////////////////////////////////

function closeImagePopup() {
  document.querySelector(".image-popup").classList.add("image-popup_hidden");
}

const imageCloseButton = document.querySelector(".image-popup__close-button");
imageCloseButton.addEventListener("click", closeImagePopup);

//////// ativa e desativa popup confirma //////
//////////////////////////////////////////////

const confirmationPopup = document.querySelector(".popup-confirmation");
const confirmationButton = document.querySelector(".popup-confirmation__button");
const confirmationCloseButton = document.querySelector(".popup-confirmation__close-button")
confirmationCloseButton.addEventListener('click',function(){
  confirmationPopup.classList.remove("popup-confirmation_inactive")
});


export function confirmsDelete(cardId,template){
  confirmationPopup.classList.remove("popup-confirmation_inactive")
  confirmationButton.addEventListener('click',function(){api.deleteCard(cardId).
    then(template.remove()).
    then(confirmationPopup.classList.add("popup-confirmation_inactive"))
  }
  )
};

