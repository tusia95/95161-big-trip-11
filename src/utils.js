import {TRANSFER_EVENTS, ACTIVITY_EVENTS} from './data';

export const MONTHS_NAMES = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};


export const formatTypeWithPreposition = (type) => {
  switch (true) {
    case TRANSFER_EVENTS.indexOf(type) >= 0:
      return `to`;
    case ACTIVITY_EVENTS.indexOf(type) >= 0:
      return `in`;
    default:
      return ` `;
  }
};


export const formatDate = (date) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return {year, day, month, hours, minutes};
};

export const getTripTitle = (tripPoints) => {
  switch (true) {
    case tripPoints.length > 3:
      return `${tripPoints[0].cityName} &mdash; ... &mdash; ${tripPoints[tripPoints.length - 1].cityName}`;
    case tripPoints.length === 3:
      return `${tripPoints[0].cityName} &mdash; ${tripPoints[1].cityName}  &mdash; ${tripPoints[tripPoints.length - 1].cityName}`;
    case tripPoints.length === 1:
      return `${tripPoints[0].cityName}`;
    case tripPoints.length === 2:
      return `${tripPoints[0].cityName} &mdash; ${tripPoints[1].cityName}`;
    default:
      return `you dont plan any trip`;
  }
};

export const getTripDates = (tripPoints) => {
  return `${MONTHS_NAMES[formatDate(tripPoints[0].tripDate.start).month]} ${formatDate(tripPoints[0].tripDate.start).day}&nbsp;&mdash;&nbsp${formatDate(tripPoints[tripPoints.length - 1].tripDate.end).day}`;
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};
