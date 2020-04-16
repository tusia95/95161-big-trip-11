import {MONTHS_NAMES} from '../data';
export const createDayEventsContainer = (tripPoint, counter) => {
  return (
    `<div class="day__info">
        <span class="day__counter">${counter}</span>
        <time class="day__date" datetime="${tripPoint.tripYear}-${tripPoint.tripMonth}-${tripPoint.tripDate.start}">${MONTHS_NAMES[tripPoint.tripMonth]} ${tripPoint.tripDate.start}</time>
    </div>
    <ul class="trip-events__list"></ul>`
  );
};
