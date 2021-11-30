import generateImage from './helpers/generate-image';
import cards from './helpers/cards';

export default class Renderer {
  constructor() {
    this.renderInitial();
  }

  // eslint-disable-next-line class-methods-use-this
  renderInitial() {
    const appContainer = document.querySelector('#app');
    appContainer.innerHTML = `
        <div class="cards"></div>
        <div class="search"></div>
        <div class="validation-result none"></div>
    `;

    this.renderCards();
    this.renderSearch();
  }

  // eslint-disable-next-line class-methods-use-this
  renderCards() {
    this.cardsEl = document.querySelector('.cards');
    Object.keys(cards).forEach((cardName) => generateImage(this.cardsEl, cardName));
  }

  // eslint-disable-next-line class-methods-use-this
  renderSearch() {
    const searchEl = document.querySelector('.search');
    this.inputEl = document.createElement('input');
    searchEl.appendChild(this.inputEl);

    this.buttonEl = document.createElement('button');
    this.buttonEl.innerText = 'Validate';

    searchEl.appendChild(this.buttonEl);

    this.notifier = document.createElement('div');
    this.notifier.classList.add('notifier');
    this.notifier.classList.add('none');
    this.notifier.innerText = 'Input credit card number. Numbers only';

    searchEl.appendChild(this.notifier);
  }

  setNotifierStatus(show) {
    if (show) {
      this.notifier.classList.remove('none');
    } else {
      this.notifier.classList.add('none');
    }
  }

  getInputEl() {
    return this.inputEl;
  }

  getButton() {
    return this.buttonEl;
  }

  updateCards(cardsToUpdate) {
    const images = this.cardsEl.querySelectorAll('img');
    images.forEach((image) => {
      if (cardsToUpdate) {
        if (cardsToUpdate.includes(image.dataset.img)) {
          image.classList.remove('blur');
        } else {
          image.classList.add('blur');
        }
      } else {
        image.classList.remove('blur');
      }
    });
  }

  static setValidationResult(result) {
    const validationResultEl = document.querySelector('.validation-result');

    const text = result ? 'Valid' : 'Invalid';
    const successClass = 'valid';
    const invalidClass = 'invalid';

    const classToAdd = result ? successClass : invalidClass;

    validationResultEl.classList.remove(successClass);
    validationResultEl.classList.remove(invalidClass);
    validationResultEl.classList.remove('none');
    validationResultEl.innerText = text;
    validationResultEl.classList.add(classToAdd);
  }

  static hideValidationResult() {
    const validationResultEl = document.querySelector('.validation-result');
    validationResultEl.classList.add('none');
  }
}
