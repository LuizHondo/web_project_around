import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector('.popup__form'); // Assumindo uma classe genérica para o formulário
    this._inputList = this._form.querySelectorAll('.popup__form-elements'); // Assumindo uma classe genérica para os inputs
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value; // Assume que os inputs têm um atributo 'name'
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners(); // Adiciona listeners do pai (fechar botão e área escura)

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;