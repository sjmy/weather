import "./styles.css";
import { getRawWeather } from "./getWeatherData.js";
import { processWeather } from "./processWeatherData.js";
import { drawLoading, drawWeather } from "./drawWeatherData.js";

// Weather app using Visual Crossing API
// Get the current weather for a location, toggle between Celcius and Fahrenheit
// Search bar for location
// Display icons for weather
// Potential functionality: five day forecast
// API Key DZT5RXGHUH8KC87N2AGBG6S3Z

async function reportWeather() {
  drawLoading();
  const weatherRaw = await getRawWeather();
  const weather = processWeather(weatherRaw);
  drawWeather(weather);
}

function startEventListeners() {
  const searchButton = document.querySelector("#search-button");
  const searchInput = document.querySelector("#search");

  searchButton.addEventListener("click", () => {
    reportWeather();
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      reportWeather();
    }
  });
}

reportWeather();
startEventListeners();
