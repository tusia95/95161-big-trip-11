
import {getTripTitle, getTripDates} from '../utils';
export const createTripInfoTemplate = (tripPoints) => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
       <h1 class="trip-info__title">${getTripTitle(tripPoints)}</h1>
       <p class="trip-info__dates">${getTripDates(tripPoints)}</p>
      </div>
     </section>`
  );
};
