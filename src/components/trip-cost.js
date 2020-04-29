import {createElement} from '../utils';
import {getTotalPrice} from '../calculation';

const createTripCostTemplate = (tripPoints) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTotalPrice(tripPoints)}</span>
    </p>`
  );
};

export default class TripCost {
  constructor(tripPoints) {
    this._tripPoints = tripPoints;
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate(this._tripPoints);
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

