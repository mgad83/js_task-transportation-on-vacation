/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let totalCost = 0;

  if (days <= 2) {
    totalCost = days * 40;
  } else if (days <= 6) {
    totalCost = days * 40 - 20;
  } else {
    totalCost = days * 40 - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
