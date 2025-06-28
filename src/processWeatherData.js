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
      description: days[d].description,
      feelslikeC: days[d].feelslike,
      feelslikeF: celsiusToFahrenheit(days[d].feelslike),
      humidity: days[d].humidity,
      icon: days[d].icon,
      tempC: days[d].temp,
      tempF: celsiusToFahrenheit(days[d].temp),
      tempmaxC: days[d].tempmax,
      tempmaxF: celsiusToFahrenheit(days[d].tempmax),
      tempminC: days[d].tempmin,
      tempminF: celsiusToFahrenheit(days[d].tempmin),
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

  // console.log(`Location: ${location}`);
  // console.log(`Current temp: ${fiveDayArray[0].tempC} C`);
  // console.log(`Current conditions: ${fiveDayArray[0].conditions}`);
  // console.log(`Current humidity: ${fiveDayArray[0].humidity}`);

  return { location, sixDayArray };
}
