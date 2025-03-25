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

/////////////////////////////////////////////////////////////
//////////////// adiciona o image popup close button ///////
///////////////////////////////////////////////////////////

function closeImagePopup(){
  document.querySelector(".image-popup").classList.add("image-popup_hidden")
}

document.querySelector(".image-popup__close-button").addEventListener("click", closeImagePopup)

////////////////////////////////////////////////////////////////////////
///////////////// Adiciona cards que estão no array ///////////////////
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

const buttonCreate = document.querySelector(".new-place__submit");
const elements = document.querySelector(".elements__cards");

function renderCard() {
  const renderedCards = initialCards;
  elements.innerHTML = "";
  for (let i = 0; i < renderedCards.length; i++) {
    const template = document.getElementById("elements__template-card").content.cloneNode(true);
    template.querySelector(".elements__image").addEventListener("click", function openImagePopup(){
      document.querySelector(".image-popup__content").src = renderedCards[i].link;
      document.querySelector(".image-popup__title").textContent = renderedCards[i].name;
      document.querySelector(".image-popup").classList.remove("image-popup_hidden")
    })
    template.querySelector(".elements__text").textContent = renderedCards[i].name;
    template.querySelector(".elements__image").src = renderedCards[i].link;
    template.querySelector(".elements__delete").addEventListener("click",function removeCard(i){
        renderedCards.splice(i,1) //remove do array
        this.parentNode.remove() //remove do visual
      }
    )
    heart = template.querySelector(".elements__heart");
    if(initialCards[i].heart){
      heart.classList.add("elements__heart_active")
    }

    heart.addEventListener("click", function heartToggle() {
      renderedCards[i].heart = !renderedCards[i].heart;  // Alterna 'heart' no array
      renderedCards[i].heart = this.classList.toggle("elements__heart_active")
    });
    
      
    
    elements.prepend(template);
  }
}

function addCard(){
  const cardName = document.getElementById("place-title").value;
  const cardLink = document.getElementById("place-link").value;
  initialCards.push({
    name: cardName,
    link: cardLink,
    heart: false
  }) // Adiciona o card ao array
  
  
  toggleNewPlace();
  renderCard(); //Re renderiza os cards
  document.getElementById("place-title").value = ""; // Limpa o input
  document.getElementById("place-link").value = ""; // Limpa o input

}


buttonCreate.addEventListener("click",addCard)

renderCard();
