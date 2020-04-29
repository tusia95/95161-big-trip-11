import {createElement, formatDate} from '../utils';
const createEventCardTemplate = (tripPoint) => {
  return (
    `<li class="trip-events__item">
      <div class="event">
       <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${tripPoint.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${tripPoint.type}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime= ${formatDate(tripPoint.tripDate.start).year}-${formatDate(tripPoint.tripDate.start).month}-${formatDate(tripPoint.tripDate.start).hours}T$${formatDate(tripPoint.tripDate.start).month}-${formatDate(tripPoint.tripDate.start).hours}>${formatDate(tripPoint.tripDate.start).hours}:${formatDate(tripPoint.tripDate.start).minutes}</time>
          &mdash;
          <time class="event__end-time" datetime= ${formatDate(tripPoint.tripDate.start).year}-${formatDate(tripPoint.tripDate.end).month}-${formatDate(tripPoint.tripDate.end).hours}T$${formatDate(tripPoint.tripDate.end).month}-${formatDate(tripPoint.tripDate.end).hours}>${formatDate(tripPoint.tripDate.end).hours}:${formatDate(tripPoint.tripDate.end).minutes}</time>
        </p>
        <p class="event__duration">1H 30M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${tripPoint.price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${tripPoint.offers.map((offer) =>
      `<li class="event__offer">
        <span class="event__offer-title">${offer.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
       </li>`).join(` `)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};

export default class PointCard {
  constructor(tripPoint) {
    this._eventCard = tripPoint;

    this._element = null;
  }

  getTemplate() {
    return createEventCardTemplate(this._eventCard);
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


