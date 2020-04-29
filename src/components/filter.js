
import {createElement} from '../utils';

const сreateFilterTemplate = ({name, isChecked}) => {
  const id = name.toLowerCase();
  return (
    `<div class="trip-filters__filter">
        <input
          id="filter-${id}"
          class="trip-filters__filter-input visually-hidden"
          type="radio"
          name="trip-filter"
          value="${name}"
          ${isChecked ? `checked` : ``}
        >
        <label class="trip-filters__filter-label" for="filter-${id}">${name}</label>
      </div>`);
};

const сreateFiltersTemplate = (filters) => (
  `<form class="trip-filters" action="#" method="get">
      ${filters.map(сreateFilterTemplate).join(``)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
);

export default class Filters {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return сreateFiltersTemplate(this._filters);
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

