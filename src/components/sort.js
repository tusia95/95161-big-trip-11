
import {createElement} from '../utils';

const createSimpleSortTemplate = (name) => {
  return (
    `<span class="trip-sort__item  trip-sort__item--day">${name}</span>`
  );
};

const createInputSortTemplate = (name) => {
  return (
    `<div class="trip-sort__item  trip-sort__item--${name}">
  <input id="sort-${name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort--${name}">
  <label class="trip-sort__btn" for="sort--${name}">${name}</label>
</div>`
  );
}

const createSortTemplate = (sortings) => {
  const inputSortings = sortings.slice(1, sortings.length - 1);
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${createSimpleSortTemplate(sortings[0])} ${inputSortings.map(createInputSortTemplate).join(``)} ${createSimpleSortTemplate(sortings[sortings.length - 1])}
  </form>`
  );
};


export default class Sort {
  constructor(sortings) {
    this._sortings = sortings;
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate(this._sortings);
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

