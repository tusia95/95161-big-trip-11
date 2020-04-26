import {MONTHS_NAMES} from '../utils';
import {formatDate, createElement} from '../utils';
const createDayEventsContainerTemplate = (tripPoint, counter) => {
  return (
    `<li class="trip-days__item day">  
     <div class="day__info">
        <span class="day__counter">${counter}</span>
        <time class="day__date" datetime="${formatDate(tripPoint.tripDate.start).year}-${formatDate(tripPoint.tripDate.start).month}-${formatDate(tripPoint.tripDate.start).day}">${MONTHS_NAMES[formatDate(tripPoint.tripDate.start).month]} ${formatDate(tripPoint.tripDate.start).day}</time>
     </div>
      <ul class="trip-events__list"></ul>
    </li>`
  );
};

export default class DayEventsContainer {
  constructor(tripPoint, counter) {
    this._tripPont = tripPoint;
    this._counter = counter;
    this._element = null;
  }

  getTemplate() {
    return createDayEventsContainerTemplate(this._tripPont, this._counter);
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

