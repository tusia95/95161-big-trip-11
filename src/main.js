
const TRIP_POINT_COUNT = 3;

import {createTripInfoTemplate} from './components/trip_info';
import {createCostTemplate} from './components/cost';
import {сreateFiltersTemplate} from './components/filter';
import {createMenuTemplate} from './components/menu';
import {createSortingTemplate} from './components/sorting';
import {createEventCardTemplate} from './components/event_card';
import {createEventEditTemplate} from './components/event_edit';
import { createDayEventsContainer} from './components/day_events_container';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainInfoElement = document.querySelector(`.trip-main`);

render(tripMainInfoElement, createTripInfoTemplate(), `afterbegin`);


const tripControlElement = document.querySelector(`.trip-controls`);
const tripInfoElement = document.querySelector(`.trip-info`);

render(tripInfoElement, createCostTemplate(), `beforeend`);

render(tripControlElement, сreateFiltersTemplate(), `beforeend`);

const tripSwitcherElement = tripControlElement.querySelector(`:first-child`);


render(tripSwitcherElement, createMenuTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, createSortingTemplate(), `beforeend`);
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
