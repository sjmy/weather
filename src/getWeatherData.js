import processWeatherDataObject from "./processWeatherData.js";

export default function getWeatherData() {
  const processWeather = processWeatherDataObject();

  async function requestWeather(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=DZT5RXGHUH8KC87N2AGBG6S3Z&contentType=json`,
        {
          method: "GET",
        },
      );
      const weatherData = await response.json();

      console.log("getWeather():");
      console.log(weatherData);
      processWeather.processData(weatherData);
    } catch (err) {
      console.error(err);
    }
  }

  function getLocation() {
    const searchValue = document.querySelector("#search").value;
    return searchValue;
  }

  const getWeather = () => {
    const location = getLocation();
    return requestWeather(location);
  };

  return { getWeather };
}
