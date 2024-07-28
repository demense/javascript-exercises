const convertToCelsius = function(degreeFahrenheit) {
  return parseFloat((((degreeFahrenheit) - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(degreeCelsius) {
  return parseFloat(((degreeCelsius) * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
