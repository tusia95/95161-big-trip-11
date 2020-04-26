import TripInfoComponent from './components/trip-info';
import TripCostComponent from './components/trip-cost';
import FilterComponent from './components/filter';
import MenuComponent from './components/menu';
import SortComponent from './components/sort';
import EventCardComponent from './components/event-card';
import EventEditComponent from './components/event-edit';
import DayEventsContainerComponent  from './components/day-events-container';
import NewEventButtonComponent from './components/new-event-button';
import PointsContainerComponent from './components/points-container';
import {generateMockData, MOCK_DATA_NUM, generateDestinations, generateTypes} from './data';
import {formatDate, sortings, filters, render, RenderPosition} from './utils';


const pointDatas = generateMockData();
const eventCards = pointDatas.slice(1, MOCK_DATA_NUM);

const destinations = generateDestinations();
const types = generateTypes();


const tripMainInfoElement = document.querySelector(`.trip-main`);

render(tripMainInfoElement, new TripInfoComponent(eventCards).getElement(), RenderPosition.AFTERBEGIN);
render(tripMainInfoElement, new NewEventButtonComponent().getElement(), RenderPosition.BEFOREEND);// почему не отображается?

const tripControlElement = document.querySelector(`.trip-controls`);
const tripInfoElement = document.querySelector(`.trip-info`);

render(tripInfoElement, new TripCostComponent(eventCards).getElement(), RenderPosition.BEFOREEND);

const tripSwitcherElement = tripControlElement.querySelector(`h2:first-child`);
render(tripSwitcherElement, new MenuComponent().getElement(), RenderPosition.BEFOREEND); // afterend

render(tripControlElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);


const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, new SortComponent(sortings).getElement(), RenderPosition.BEFOREEND);

// render(tripEventsElement, new EventEditComponent(pointDatas[0], destinations, types).getElement(), RenderPosition.BEFOREEND);

// render container for all trip days
render(tripEventsElement, new PointsContainerComponent().getElement(), RenderPosition.BEFOREEND);

const sortCards = eventCards.sort((a, b) => {
  return formatDate(a.tripDate.start).month - formatDate(b.tripDate.start).month;
});

// all days container element
const daysContainerElement = document.querySelector(`.trip-days`);
let startPointDate = sortCards[0].tripDate.start;
let counter = 1;

// arrow down for trip point


const renderEvent = (dayEventsContainerElement, eventCard) => {
  const onRollUpBtnClick = () => {
    dayEventsContainerElement.replaceChild(eventEditComponent.getElement(), eventCardComponent.getElement());
  };
  
  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    dayEventsContainerElement.replaceChild(eventCardComponent.getElement(), eventEditComponent.getElement());
  };


  const eventCardComponent = new EventCardComponent(eventCard);
  const eventEditComponent = new EventEditComponent(eventCard, destinations, types);
  const rollUpBtn = eventCardComponent.getElement().querySelector(`.event__rollup-btn`);
  const eventSubmitBtn = eventEditComponent.getElement().querySelector(`.event--edit`);
  rollUpBtn.addEventListener(`click`, onRollUpBtnClick);
  eventSubmitBtn.addEventListener(`submit`, onEditFormSubmit);

  render(dayEventsContainerElement, eventCardComponent.getElement(), RenderPosition.BEFOREEND);
};

render(daysContainerElement, new DayEventsContainerComponent(sortCards[0], counter++).getElement(), RenderPosition.BEFOREEND);
let dayEventsContainerElement = daysContainerElement.querySelector(`li:last-child`);
for (let i = 0; i < sortCards.length; i++) {
  const currentCard = sortCards[i];
  if (currentCard.tripDate.start === startPointDate) {
    renderEvent(dayEventsContainerElement, currentCard);
  } else {
    startPointDate = currentCard.tripDate.start;
    render(daysContainerElement, new DayEventsContainerComponent(currentCard, counter++).getElement(), RenderPosition.BEFOREEND);
    dayEventsContainerElement = daysContainerElement.querySelector(`li:last-child`);
    renderEvent(dayEventsContainerElement, currentCard);
  }
};