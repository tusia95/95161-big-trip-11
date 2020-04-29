export const getTotalPrice = (tripPoints) => {
  const pointOffersSum = (offers) => {
    let pointOffersPrice = 0;
    if (offers) {
      offers.reduce((sum, current) => {
        pointOffersPrice = sum + current.price;
      }, 0);
    }
    return pointOffersPrice;
  };


  const offersTotalPrice = tripPoints.reduce((accum, current) => {
    return accum + pointOffersSum(current.offers);
  }, 0);
console.log(offersTotalPrice);
  const pointsPrice = tripPoints.reduce((sum, current) => {
    return sum + current.price;
  }, 0);

  return offersTotalPrice + pointsPrice;
}