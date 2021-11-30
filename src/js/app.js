import Renderer from './renderer';
import checkLuhn from './helpers/check-luhn';
import getCardType from './helpers/get-card-type';
import onlyNumbers from './helpers/only-numbers';

class App {
  constructor() {
    this.renderer = new Renderer();
    this.registerListeners();
  }

  registerListeners() {
    this.registerInputChange();
    this.registerOnValidateForm();
  }

  registerInputChange() {
    this.renderer.getInputEl().addEventListener('input', (event) => {
      Renderer.hideValidationResult();
      const testValue = onlyNumbers.test(event.target.value);

      if (testValue || event.target.value === '') {
        this.renderer.updateCards(getCardType(event.target.value));
        this.renderer.setNotifierStatus(false);
      } else {
        this.renderer.setNotifierStatus(true);
      }
    });
  }

  registerOnValidateForm() {
    this.renderer.getInputEl().addEventListener('keydown', (event) => {
      const testValue = onlyNumbers.test(event.target.value);

      if (testValue && event.key === 'Enter') {
        App.setValidationResult(event.target.value);
      }
    });

    this.renderer.getButton().addEventListener('click', (event) => {
      App.setValidationResult(event.target.previousSibling.value);
    });
  }

  static setValidationResult(cardNumber) {
    Renderer.setValidationResult(checkLuhn(cardNumber));
  }
}

// eslint-disable-next-line no-new
new App();
