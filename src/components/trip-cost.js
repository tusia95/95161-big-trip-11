import {getTotalSum} from '../utils';
export const createTripCostTemplate = (tripPoints) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTotalSum(tripPoints)}</span>
    </p>`
  );
};
