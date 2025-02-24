// Elements
const popup = document.querySelector(".popup");
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const profileName = document.querySelector(".profile__name-text");
const profileDescription = document.querySelector(".profile__description");
const popupCloseButton = document.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__name-edit-button");
const saveProfileButton = document.querySelector(".popup__submit");
const profileForm = document.querySelector(".popup__form");
// Functions
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
function openPopup() {
  popup.classList.remove("popup_hidden");
  getElements();
}
function closePopup() {
  popup.classList.add("popup_hidden");
}
getElements();

// Event Listeners
popupCloseButton.addEventListener("click", closePopup);
editButton.addEventListener("click", openPopup);
profileForm.addEventListener("submit", setElements);
