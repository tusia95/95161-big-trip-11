export const MOCK_DATA_NUM = 15;
const MIN_PRICE = 10;
const MAX_PRICE = 100;
const MIN_OPTIONS = 0;
const MAX_OPTIONS = 3;
const MIN_NUMBER_DESCRIPTIONS = 1;
const MAX_NUMBER_DESCRIPTIONS = 3;

const MIN_TYPES = 3;
const MAX_TYPES = 10;

const MIN_DESTINATIONS = 1;
const MAX_DESTINATIONS = 10;

const MIN_PHOTO = 1;
const MAX_PHOTO = 5;

const MAX_EVENT_DURATION = 4;


const tripPointTypes = [`taxi`, `bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeing`, `train`, `transport`];
// to
export const TRANSFER_EVENTS = [
  `taxi`,
  `bus`,
  `train`,
  `ship`,
  `transport`,
  `drive`,
  `flight`,
];

// in
export const ACTIVITY_EVENTS = [
  `check-in`,
  `sightseeing`,
  `restaurant`,
];


const cityNames = [`Amsterdam`, `Geneva`, `Zurich`, `Saint-Petersburg`, `Limassol`];
const optionsNames = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`];

const destinationDescr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
let descriptions = destinationDescr.split(`.`);

const generateDate = () => {
  let dateFrom = new Date();
  let dateEnd = new Date();
  if (dateFrom > dateEnd) {
    let temp = dateFrom;
    dateFrom = dateEnd;
    dateEnd = temp;
  }
  return {start: dateFrom, end: dateEnd};
};

const generateIsFavorite = () => {
  return Math.random() > 0.5 ? true : false;
};

const generateRandLengthArray = (minEl, maxEl) => {
  return new Array(Math.floor(minEl + Math.random() * (maxEl)));
};


const generateTripPointType = () => {
  return tripPointTypes[Math.floor(Math.random() * tripPointTypes.length)];
};

const generateTypes = () => {
  return generateRandLengthArray(MIN_TYPES, MAX_TYPES)
  .fill(``)
  .map(generateTripPointType);
};

const generateDestination = () => {
  return {
    name: generateCityName(),
    description: generateDestinDescription(),
    photos: generatePhotos()
  };
};

const generateDestinations = () => {
  return generateRandLengthArray(MIN_DESTINATIONS, MAX_DESTINATIONS)
  .fill(``)
  .map(generateDestination);
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
  return {description: generateDestinDescription(), photos: generatePhotos()};
};

/* const generate dataList = () => {
  return generateCityName;
}*/


const generateTripPoint = () => {
  return {
    type: generateTripPointType(),
    cityName: generateCityName(),
    price: generatePrice(),
    destination: generateDestinationInfo(),
    offers: generateOptions(),
    tripDate: generateDate(),
  };
};

const generateMockData = () => {
  return new Array(MOCK_DATA_NUM)
  .fill(``)
  .map(generateTripPoint);
};

export {generateMockData, generateDestinations, generateTypes, generateIsFavorite};
