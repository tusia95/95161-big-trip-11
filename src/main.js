

const MOCK_DATA_NUM = 15;
const TRIP_POINT_COUNT = MOCK_DATA_NUM - 1;
import {createTripInfoTemplate} from './components/trip-info';
import {createTripCostTemplate} from './components/trip-cost';
import {сreateFilterTemplate} from './components/filter';
import {createMenuTemplate} from './components/menu';
import {createSortTemplate} from './components/sort';
import {createEventCardTemplate} from './components/event-card';
import {createEventEditTemplate} from './components/event-edit';
import {createDayEventsContainer} from './components/day-events-container';
import {createNewEventButtonTemplate} from './components/new-event-button';
import {createPointsContainer} from './components/points-container';
import {generateTripPoint, filterNames} from './data';


const generateMockData = () => {
  return new Array(MOCK_DATA_NUM)
  .fill(``)
  .map(generateTripPoint);
};

const cardDatas = generateMockData().splice(1, MOCK_DATA_NUM - 1);

export const totalSum = cardDatas.reduce((sum, current) => {
  return sum + current.price;
}, 0);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainInfoElement = document.querySelector(`.trip-main`);

render(tripMainInfoElement, createTripInfoTemplate(generateMockData()[0], generateMockData()[1], generateMockData()[2]), `afterbegin`);
render(tripMainInfoElement, createNewEventButtonTemplate(), `beforeend`);

const tripControlElement = document.querySelector(`.trip-controls`);
const tripInfoElement = document.querySelector(`.trip-info`);

render(tripInfoElement, createTripCostTemplate(), `beforeend`);

render(tripControlElement, сreateFilterTemplate(filterNames), `beforeend`);

const tripSwitcherElement = tripControlElement.querySelector(`:first-child`);


render(tripSwitcherElement, createMenuTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, createSortTemplate(), `beforeend`);

render(tripEventsElement, createEventEditTemplate(generateMockData()[0]), `beforeend`);

// render container for all trip days
render(tripEventsElement, createPointsContainer(), `beforeend`);

// const sortingElement = document.querySelector(`.event--edit`);

const sortingPoints = cardDatas.sort((a, b) => {
  return a.tripDate.start - b.tripDate.start;
});

// all days container element
let daysContainer = document.querySelector(`.trip-days__item`);
let startPointDate = sortingPoints[0].tripDate.start;
let counter = 1;

render(daysContainer, createDayEventsContainer(sortingPoints[0], counter++), `beforeend`);
let dayEventsContainer = daysContainer.querySelector(`ul:last-child`);
for (let e = 1; e < sortingPoints.length; e++) {
  if (sortingPoints[e].tripDate.start === startPointDate) {
    render(dayEventsContainer, createEventCardTemplate(sortingPoints[e]), `beforeend`);
  } else {
    startPointDate = sortingPoints[e].tripDate.start;
    render(daysContainer, createDayEventsContainer(sortingPoints[e], counter++), `beforeend`);
    dayEventsContainer = daysContainer.querySelector(`ul:last-child`);
    render(dayEventsContainer, createEventCardTemplate(sortingPoints[e]), `beforeend`);
  }
}
