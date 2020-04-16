
const MIN_PRICE = 10;
const MAX_PRICE = 100;
const MIN_OPTIONS = 0;
const MAX_OPTIONS = 5;
const MIN_NUMBER_DESCRIPTIONS = 1;
const MAX_NUMBER_DESCRIPTIONS = 3;

const MIN_PHOTO = 1;
const MAX_PHOTO = 5;

const MIN_MINUTES = 0;
const MAX_MINUTES = 59;

const MIN_HOURS = 0;
const MAX_HOURS = 23;

const MAX_MONTH = 11;
const MAX_EVENT_DURATION = 4;


/* const generateDate = () => {
  // const year = new Date().getFullYear().toString().slice(-2);
  const year = generateTwoNumbersOfYear;
  const month = generateRandomMonth;
  const day = new Date().getDate();
  const date = new Date(Date.UTC(year, month, day, 0, 0, 0)).toLocaleString();
  return date;
}; */

const tripPointTypes = [`taxi`, `bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeing`, `train`, `transport`, `trip`];

const cityNames = [`Amsterdam`, `Geneva`, `Zurich`, `Saint-Petersburg`, `Limassol`];
const optionsNames = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`];

const destinationDescr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
let descriptions = destinationDescr.split(`.`);

export const MONTHS_NAMES = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];


export const filterNames = [`Everything`, `Future`, `Past`];

const generateMinutes = () => {
  const minutes = Math.floor(MIN_MINUTES + Math.random() * MAX_MINUTES);
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
};

const generateHours = () => {
  const hours = Math.floor(MIN_HOURS + Math.random() * MAX_HOURS);
  return hours < 10 ? `0${hours}` : `${hours}`;
};

const generateTime = () => {
  return `${generateHours()}:${generateMinutes()}`;
};

const generateYear = () => {
  return new Date().getFullYear().toString();
};

const generateMonth = () => {
  const month = new Date().getMonth();
  return month;
};

const generateDate = () => {
  let startDate = Math.floor(new Date().getDate() + Math.random() * MAX_EVENT_DURATION);
  let endDate = Math.floor(new Date().getDate() + Math.random() * MAX_EVENT_DURATION);
  if (startDate > endDate) {
    let temp = startDate;
    startDate = endDate;
    endDate = temp;
  }
  return {start: startDate, end: endDate};
};

const generateRandLengthArray = (minEl, maxEl) => {
  return new Array(Math.floor(minEl + Math.random() * (maxEl)));
};


const generateTripPointType = () => {
  return tripPointTypes[Math.floor(Math.random() * tripPointTypes.length)];
};

const generateCityName = () => {
  return cityNames[Math.floor(Math.random() * cityNames.length)];
};

const generatePrice = () => {
  return Math.floor(MIN_PRICE + Math.random() * (MAX_PRICE));
};

const generateDestinDescription = () => {
  let description = new Set();
  for (let i = 0; i < MIN_NUMBER_DESCRIPTIONS + Math.random() * (MAX_NUMBER_DESCRIPTIONS - MIN_NUMBER_DESCRIPTIONS); i++) {
    description.add(descriptions[Math.floor(Math.random() * descriptions.length)]);
  }
  let randomDescriptions = [...description];
  return randomDescriptions.join(`.`);
};
const generatePhoto = () => {
  return `http://picsum.photos/300/150?r=${Math.random()}`;
};

const generateOption = () => {
  let option = {type: generateTripPointType(), name: optionsNames[Math.floor(Math.random() * (optionsNames.length))], price: generatePrice()};
  return option;
};

const generateOptions = () => {
  return generateRandLengthArray(MIN_OPTIONS, MAX_OPTIONS)
  .fill(``)
  .map(generateOption);
};

const generatePhotos = () => {
  return generateRandLengthArray(MIN_PHOTO, MAX_PHOTO)
  .fill(``)
  .map(generatePhoto);
};

const generateDestinationInfo = () => {
  return {description: generateDestinDescription(), photo: generatePhotos()};
};


const generateTripPoint = () => {
  return {
    type: generateTripPointType(),
    cityName: generateCityName(),
    price: generatePrice(),
    destinationInfo: generateDestinationInfo(),
    options: generateOptions(),
    tripYear: generateYear(),
    tripMonth: generateMonth(),
    tripDate: generateDate(),
    startTime: generateTime(),
    endTime: generateTime()
  };
};

export {generateTripPoint};
