export class FormValidator{
  constructor(config,formElement){
    this._config = config;
    this._form = formElement;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    this._inactiveButtonClass = this._config.inactiveButtonClass;

  }
  _toggleSubmitButton(){
    if (this._form.checkValidity()) {
      this._submitButton.classList.remove(this._inactiveButtonClass);
    }
    else{
      this._submitButton.classList.add(this._inactiveButtonClass);
    }
  }
  _eventListenerHandler(){
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const errorElement = this._form.querySelector(`#${input.id}-error`) 
        if (this._form.checkValidity()) {
          errorElement.textContent = "";
        } else {
          errorElement.textContent = input.validationMessage;
        }
        this._toggleSubmitButton()
      });
    })
  }
  enableValidation(){
    return this._eventListenerHandler()
  }

}





  /////////TESTE/TESTE
  // const newPlaceForm = document.querySelector(".new-place__form");  
  // const teste = new FormValidator({
  // formSelector: ".new-place__form",
  // inputSelector: ".new-place__form-elements",
  // submitButtonSelector: ".new-place__submit",
  // inactiveButtonClass: "new-place__submit_inactive",
  // },newPlaceForm)
  // console.log(teste)