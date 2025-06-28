// Grab resolvedAddress
// Parse data into days array with needed data points. Six days in the array (today plus a five day forecast).
// days[d]: conditions, datetime (or datetimeEpoch), description, feelslike, humidity, icon (dynamicImport()?), temp, tempmax, tempmin
// days[0] is today

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function getSixDayArray(days) {
  let fiveDayArray = [];

  for (let d = 0; d < 6; d++) {
    fiveDayArray[d] = {
      conditions: days[d].conditions,
      datetime: days[d].datetime,
      feelslikeC: Math.round(days[d].feelslike),
      feelslikeF: Math.round(celsiusToFahrenheit(days[d].feelslike)),
      icon: days[d].icon,
      tempC: Math.round(days[d].temp),
      tempF: Math.round(celsiusToFahrenheit(days[d].temp)),
      tempmaxC: Math.round(days[d].tempmax),
      tempmaxF: Math.round(celsiusToFahrenheit(days[d].tempmax)),
      tempminC: Math.round(days[d].tempmin),
      tempminF: Math.round(celsiusToFahrenheit(days[d].tempmin)),
    };
  }

  return fiveDayArray;
}

function getResolvedLocation(weatherRaw) {
  return weatherRaw.resolvedAddress;
}

export function processWeather(weatherRaw) {
  const location = getResolvedLocation(weatherRaw);
  const sixDayArray = getSixDayArray(weatherRaw.days);

  return { location, sixDayArray };
}
