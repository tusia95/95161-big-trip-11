
export const createEventCardTemplate = (tripPoint) => {
  return (
    `<li class="trip-events__item">
      <div class="event">
       <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${tripPoint.type}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime= ${tripPoint.tripYear}-${tripPoint.tripMonth}-${tripPoint.tripDate.start}T${tripPoint.startTime}>${tripPoint.startTime}</time>
          &mdash;
          <time class="event__end-time" datetime=${tripPoint.tripYear}-${tripPoint.tripMonth}-${tripPoint.tripDate.end}T${tripPoint.endTime}>${tripPoint.endTime}</time>
        </p>
        <p class="event__duration">1H 30M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${tripPoint.price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${tripPoint.options.map((it) =>
      `<li class="event__offer">
        <span class="event__offer-title">${it.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${it.price}</span>
       </li>`).join(` `)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};


