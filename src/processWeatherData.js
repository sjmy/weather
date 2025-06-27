// Grab resolvedAddress
// Parse data into days array with needed data points. Five days in the array.
// days[n]: conditions, datetime (or datetimeEpoch), description, feelslike, humidity, icon (dynamicImport()?), temp, tempmax, tempmin
// days[0] is today

// function createDaysArray() {

// }

export function processWeatherData(weatherData) {
  const location = weatherData.resolvedAddress;
  const currentTemp = weatherData.days[0].temp;
  const currentConditions = weatherData.days[0].conditions;
  const currentHumidity = weatherData.days[0].humidity;

  console.log(`Location: ${location}`);
  console.log(`Current temp: ${currentTemp}`);
  console.log(`Current conditions: ${currentConditions}`);
  console.log(`Current humidity: ${currentHumidity}`);
}
