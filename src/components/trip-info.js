import {MONTHS_NAMES} from '../data';
export const createTripInfoTemplate = (tripPoint1, tripPoint2, tripPoint3) => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
       <h1 class="trip-info__title">${tripPoint1.cityName} &mdash; ${tripPoint2.cityName} &mdash; ${tripPoint3.cityName}</h1>
       <p class="trip-info__dates">${MONTHS_NAMES[tripPoint1.tripMonth]} ${tripPoint1.tripDate.start}&nbsp;&mdash;&nbsp;${tripPoint3.tripDate.end}</p>
      </div>
     </section>`
  );
};
