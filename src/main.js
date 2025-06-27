import "./styles.css";
import weatherAPIObject from "./getWeatherData.js";

// Weather app using Visual Crossing API
// Get the current weather for a location, toggle between Celcius and Fahrenheit
// Search bar for location
// Display icons for weather
// Potential functionality: five day forecast
// API Key DZT5RXGHUH8KC87N2AGBG6S3Z

const searchButton = document.querySelector("#search-button");
const weatherAPI = weatherAPIObject();

searchButton.addEventListener("click", () => {
  weatherAPI.getWeather();
  console.log("loading...");
});
