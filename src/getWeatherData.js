import { processWeather } from "./processWeatherData.js";
import { drawWeather } from "./drawWeatherData.js";

// Attempts to fetch data from the API with the search input string
// London is the default
// Still not certain if this is the correct way to catch errors
// If checking the status code before the catch block, why do I need the catch block?
// Can a 400 be dealt with in the catch block? Is there a better way to report search input validity?
// Currently if a non-city is searched for, the search input reports with every keystroke. Not great
async function requestRawWeather(location = "London") {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=DZT5RXGHUH8KC87N2AGBG6S3Z&contentType=json`,
      {
        method: "GET",
      },
    );

    if (response.status === 400) {
      const search = document.querySelector("#search");
      search.setCustomValidity("Please enter a valid city name");
      search.reportValidity();
      requestRawWeather("London");
    } else {
      const weatherData = await response.json();
      const weather = processWeather(weatherData);
      drawWeather(weather);
    }
  } catch (err) {
    console.log(err);
  }
}

// Grab the search input. If empty, default to London
function getRawLocation() {
  const rawLocation = document.querySelector("#search").value;
  if (rawLocation == "") {
    return "London";
  }
  return rawLocation;
}

export function getRawWeather() {
  return requestRawWeather(getRawLocation());
}
