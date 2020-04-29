import TripInfoComponent from './components/trip-info';
import TripCostComponent from './components/trip-cost';
import FilterComponent from './components/filter';
import MenuComponent from './components/menu';
import SortComponent from './components/sort';
import PointCardComponent from './components/event-card';
import PointEditComponent from './components/event-edit';
import TripDayComponent from './components/day-events-container';
import NewEventButtonComponent from './components/new-event-button';
import TripDaysComponent from './components/points-container';
import {generateMockData, generateDestinations, generateTypes} from './data';
import {formatDate, render, RenderPosition} from './utils';

const SORTINGS = [`day`, `event`, `time`, `price`, `offers`];

const FILTERS = [
  {name: `Everything`, isChecked: true},
  {name: `Future`},
  {name: `Past`},
];

const points = generateMockData();

const destinations = generateDestinations();
const types = generateTypes();


const tripMainInfoElement = document.querySelector(`.trip-main`);

render(tripMainInfoElement, new TripInfoComponent(points).getElement(), RenderPosition.AFTERBEGIN);
render(tripMainInfoElement, new NewEventButtonComponent().getElement());

const tripControlElement = document.querySelector(`.trip-controls`);
const tripInfoElement = document.querySelector(`.trip-info`);

render(tripInfoElement, new TripCostComponent(points).getElement());

const tripSwitcherElement = tripControlElement.querySelector(`h2:first-child`);
render(tripSwitcherElement, new MenuComponent().getElement(), RenderPosition.AFTERBEGIN); // afterend

render(tripControlElement, new FilterComponent(FILTERS).getElement());


const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, new SortComponent(SORTINGS).getElement());

// render(tripEventsElement, new EventEditComponent(pointDatas[0], destinations, types).getElement(), RenderPosition.BEFOREEND);

// render container for all trip days
render(tripEventsElement, new TripDaysComponent().getElement());

const sortCards = points.sort((a, b) => {
  return formatDate(a.tripDate.start).month - formatDate(b.tripDate.start).month;
});

// all days container element
const tripDaysElement = document.querySelector(`.trip-days`);
let startPointDate = sortCards[0].tripDate.start;
let counter = 1;

// arrow down for trip point


const renderPoint = (tripDay, pointCard) => {
  const onRollUpButtonClick = () => {
    tripDay.replaceChild(pointEditComponent.getElement(), pointCardComponent.getElement());
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    tripDay.replaceChild(pointCardComponent.getElement(), pointEditComponent.getElement());
  };


  const pointCardComponent = new PointCardComponent(pointCard);
  const pointEditComponent = new PointEditComponent(pointCard, destinations, types);
  const rollUpButtonElement = pointCardComponent.getElement().querySelector(`.event__rollup-btn`);
  const eventSubmitButtonElement = pointEditComponent.getElement().querySelector(`.event--edit`);
  rollUpButtonElement.addEventListener(`click`, onRollUpButtonClick);
  eventSubmitButtonElement.addEventListener(`submit`, onEditFormSubmit);

  render(tripDayElement, pointCardComponent.getElement());
};

render(tripDaysElement, new TripDayComponent(sortCards[0], counter++).getElement());
let tripDayElement = tripDaysElement.querySelector(`li:last-child`);
for (let i = 0; i < sortCards.length; i++) {
  const currentCard = sortCards[i];
  if (currentCard.tripDate.start === startPointDate) {
    renderPoint(tripDayElement, currentCard);
  } else {
    startPointDate = currentCard.tripDate.start;
    render(tripDaysElement, new TripDayComponent(currentCard, counter++).getElement());
    tripDayElement = tripDaysElement.querySelector(`li:last-child`);
    renderPoint(tripDayElement, currentCard);
  }
}

