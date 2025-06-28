import "./styles.css";
import { getRawWeather } from "./getWeatherData.js";
import { drawLoading } from "./drawWeatherData.js";

// Weather app using Visual Crossing API
// Get the current weather for a location, toggle between Celcius and Fahrenheit
// Search bar for location
// Display icons for weather
// Five day forecast

// Kicks off weather report. Shows a loading screen while calling the API.
function reportWeather() {
  drawLoading();
  getRawWeather();
}

// Click and enter listener for search function
function startSearchListeners() {
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

// Start the app. reportWeather() has London, England as the default location
function main() {
  reportWeather();
  startSearchListeners();
}

main();
