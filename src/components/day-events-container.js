import {MONTHS_NAMES} from '../utils';
import {formatDate} from '../utils';
export const createDayEventsContainer = (tripPoint, counter) => {
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
