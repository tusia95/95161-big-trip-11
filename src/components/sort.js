
import {createElement} from '../utils';
const createSortTemplate = (sortings) => {
  return (`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">day</span>
      ${sortings.map((sorting) =>`
      div class="trip-sort__item  trip-sort__item--${sorting}">
        <input id="sort-${sorting}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort--${sorting}">
        <label class="trip-sort__btn" for="sort--${sorting}">-${sorting}</label>
      </div>`).join(` `)}
      <span class="trip-sort__item  trip-sort__item--offers">offers</span>
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

