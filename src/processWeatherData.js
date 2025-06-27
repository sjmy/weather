export default function processWeatherData() {
  function processData(weatherData) {
    const location = weatherData.resolvedAddress;
    const currentTemp = weatherData.days[0].temp;
    const currentConditions = weatherData.days[0].conditions;
    const currentHumidity = weatherData.days[0].humidity;

    console.log(`Location: ${location}`);
    console.log(`Current temp: ${currentTemp}`);
    console.log(`Current conditions: ${currentConditions}`);
    console.log(`Current humidity: ${currentHumidity}`);
  }

  return { processData };
}
