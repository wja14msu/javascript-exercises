function convertToCelsius(temp) {
  temp = (temp -32) * (5/9)
  return Math.round(temp * 10) / 10;
}

function convertToFahrenheit(temp) {
  temp = (temp * (9/5) + 32);
  return Math.round(temp * 10) / 10;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
