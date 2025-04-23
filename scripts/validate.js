export function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        submitButton.classList.remove(config.inactiveButtonClass);
        form.querySelector(`#${input.id}_error`).textContent = "";
      } else {
        submitButton.classList.add(config.inactiveButtonClass);
        form.querySelector(`#${input.id}_error`).textContent =
          input.validationMessage;
      }
    });
  });
}
