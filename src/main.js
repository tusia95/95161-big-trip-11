
const TRIP_POINT_COUNT = 3;

import {createTripInfoTemplate} from './components/trip-info';
import {createTripCostTemplate} from './components/trip-cost';
import {сreateFilterTemplate} from './components/filter';
import {createMenuTemplate} from './components/menu';
import {createSortTemplate} from './components/sort';
import {createEventCardTemplate} from './components/event-card';
import {createEventEditTemplate} from './components/event-edit';
import {createDayEventsContainer} from './components/day-events-container';
import {createNewEventButtonTemplate} from './components/new-event-button';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainInfoElement = document.querySelector(`.trip-main`);

render(tripMainInfoElement, createTripInfoTemplate(), `afterbegin`);
render(tripMainInfoElement, createNewEventButtonTemplate(), `beforeend`);

const tripControlElement = document.querySelector(`.trip-controls`);
const tripInfoElement = document.querySelector(`.trip-info`);

render(tripInfoElement, createTripCostTemplate(), `beforeend`);

render(tripControlElement, сreateFilterTemplate(), `beforeend`);

const tripSwitcherElement = tripControlElement.querySelector(`:first-child`);


render(tripSwitcherElement, createMenuTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, createSortTemplate(), `beforeend`);
render(tripEventsElement, createEventEditTemplate(), `beforeend`);

const sortingElement = document.querySelector(`.event--edit`);
render(sortingElement, createDayEventsContainer(), `afterend`);


const eventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// 3 ttrip points
new Array(TRIP_POINT_COUNT)
.fill(``)
.forEach(
    () => render(eventsListElement, createEventCardTemplate(), `beforeend`)
);
