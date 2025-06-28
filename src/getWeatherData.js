async function requestRawWeather(location = "London") {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=DZT5RXGHUH8KC87N2AGBG6S3Z&contentType=json`,
      {
        method: "GET",
      },
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

export function getRawLocation() {
  const rawLocation = document.querySelector("#search").value;
  if (rawLocation == "") {
    return "London";
  }
  return rawLocation;
}

export function getRawWeather() {
  return requestRawWeather(getRawLocation());
}
