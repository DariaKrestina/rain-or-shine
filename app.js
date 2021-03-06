// Make a request from open weather api htts://api.openweathermap.org/data/2.5/weather?q={city}&appid=4da7e530effb30d411db83fdc81cf22f and convert results to weatherInfo section

const searchButton = document.querySelector("#search");
// Section where to append data from api
const weatherInfo = document.querySelector(".weather-info");
// Link Fahrenheit
const imperial = document.querySelector("#imperial");
// Link Celsius
const metric = document.querySelector("#metric");

// Fetch weather data
async function fetchData(units) {
  // metadata to reuse in showWeatherData function
  const weatherUnits = {
    imperial: {
      degree: "F",
      wind: "mph",
    },
    metric: {
      degree: "C",
      wind: "mps",
    },
  };
  removeWeather();
  try {
    const textInput = document.querySelector("input").value;
    const apiUrlFahrenheit = `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=4da7e530effb30d411db83fdc81cf22f&units=${units}`;
    let response = await axios.get(apiUrlFahrenheit);
    let weatherData = response.data;
    showWeatherData(weatherData, weatherUnits[units]);
    return weatherData;
  } catch (error) {
    console.error(error);
    let errorText = `
    <p class="error-text">Sorry, we couldn't find anything. Make sure your location name is spelled correctly or try another one (e.g. Toronto).</p>
    `;
    weatherInfo.insertAdjacentHTML("beforeend", errorText);
  }
}

// Create new elements and append them to weatherInfo - dynamic HTML
function showWeatherData(data, metadata) {
  let weatherIcon = data.weather[0].icon;
  let weatherElements = `
  <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"/>
  <h1>${data.name} | ${data.sys.country}</h1>
  <h3>${data.weather[0].main}</h3>
  <p class="main-temp">${Math.round(data.main.temp)}&#176 ${metadata.degree}</p>
  <p class="other-temp">H: ${Math.round(data.main.temp_max)}&#176 ${metadata.degree} &#160 L: ${Math.round(data.main.temp_min)}&#176 ${metadata.degree}</p>
  <h2>FEELS LIKE ${Math.round(data.main.feels_like)}&#176 ${metadata.degree}</h2>
  <p>WIND ${Math.round(data.wind.speed)} ${metadata.wind}</p>
  `;
  weatherInfo.insertAdjacentHTML("beforeend", weatherElements);
}

// Dynamically search weather using button with eventHandler
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData("imperial");
  document.querySelector("figure").style.display = "none";
});

// Display weather data in Fahrenheit
imperial.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData("imperial");
});

// Display weather data in Celsius
metric.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData("metric");
});

// Remove previous weather search results
function removeWeather() {
  const removeElement = document.querySelector(".weather-info");
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild);
  }
}
