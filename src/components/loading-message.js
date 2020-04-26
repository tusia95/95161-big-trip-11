import {createElement} from '../utils';
const createLoadingMessageTemplate = () => {
  return (
    `<p class="trip-events__msg">Loading...</p>`
  );
};

export default class LoadingMessage {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadingMessageTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


