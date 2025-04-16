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
  inputFormHandler(profileForm)
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
  inputFormHandler(formNewPlace)
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
    const template = document
      .getElementById("elements__template-card")
      .content.cloneNode(true);

    // Adiciona evento para abrir o popup da imagem
    template
      .querySelector(".elements__image")
      .addEventListener("click", function openImagePopup() {
        document.querySelector(".image-popup__content").src = card.link;
        document.querySelector(".image-popup__title").textContent = card.name;
        document
          .querySelector(".image-popup")
          .classList.remove("image-popup_hidden");
      });

    // Define o texto e a imagem do card
    template.querySelector(".elements__text").textContent = card.name;
    template.querySelector(".elements__image").src = card.link;

    // Evento para deletar o card
    template
      .querySelector(".elements__delete")
      .addEventListener("click", function () {
        initialCards.splice(i, 1); // Remove o card do array
        renderCard(); // Re-renderiza os cards
      });

    // Configura o botão de "curtir" (heart)
    const heart = template.querySelector(".elements__heart");
    if (card.heart) {
      heart.classList.add("elements__heart_active");
    }

    // Alterna o estado "curtido" no array e atualiza a classe visual
    heart.addEventListener("click", function () {
      card.heart = !card.heart;
      heart.classList.toggle("elements__heart_active");
    });

    // Adiciona o card ao contêiner
    elements.prepend(template);
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

////////////////////////////////////////////////////////
//////////////  Validador de formulários  ////////////
////////////////////////////////////////////////////////
function inputValidator(evt){
  const inputElement = evt.target; // invoca o elemento onde ocorreu o evento
  const span = inputElement.nextElementSibling; // invoca o próximo elemento irmão, no caso, span
  if(!inputElement.validity.valid){
    span.textContent = inputElement.validationMessage;

  }
  else{
    span.textContent = ""
  }

}

function formValidator(evt){
  const form = evt.target.closest("form");
  const submitButton = form.querySelector("button[type='submit']")
  console.log(form.checkValidity())
  if (form.checkValidity()){
    submitButton.classList.remove(submitButton.classList[0]+"_inactive")
  }
  else {submitButton.classList.add(submitButton.classList[0]+"_inactive")
  }
}

//para o input handler e form validator funcionarem, os inputs devem estar em uma div com os spans; A primeira classe do input deve ter o mesmo nome da classe do span, + -validator; O button submit deve ser button, ter o type submit, e sua classe inativa deve ser nomeDoButton+_inactive;

function inputFormHandler(form){
  const inputs = Array.from(form.querySelectorAll("input"));
    inputs.forEach((input) =>{
      input.addEventListener("input",inputValidator)
      input.addEventListener("input",formValidator)
    }
  )

}