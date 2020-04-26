
import {getTripTitle, getTripDates, createElement} from '../utils';
const createTripInfoTemplate = (tripPoints) => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
       <h1 class="trip-info__title">${getTripTitle(tripPoints)}</h1>
       <p class="trip-info__dates">${getTripDates(tripPoints)}</p>
      </div>
     </section>`
  );
};

export default class TripInfo {
  constructor(tripPoints) {
    this._tripPoints = tripPoints;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._tripPoints);
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
