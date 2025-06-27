import { processWeatherData } from "./processWeatherData.js";

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
    processWeatherData(weatherData);
  } catch (err) {
    console.error(err);
  }
}

function getLocation() {
  const searchValue = document.querySelector("#search").value;
  return searchValue;
}

export function getWeather() {
  const location = getLocation();
  return requestWeather(location);
}
