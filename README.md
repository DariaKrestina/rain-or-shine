# Project Overview

## Project Name

### Rain or Shine?

Deployed [Rain or Shine?](https://dariakrestina.github.io/rain-or-shine/)

## Project Description

A web application to search and get weather information on a specific location.

## API and Data Sample

API docs https://openweathermap.org/api

```
{
    "coord": {
        "lon": -74.2776,
        "lat": 40.6082
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 292.65,
        "feels_like": 293.14,
        "temp_min": 290.28,
        "temp_max": 294.46,
        "pressure": 1010,
        "humidity": 95
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 140
    },
    "clouds": {
        "all": 1
    },
    "dt": 1627874431,
    "sys": {
        "type": 1,
        "id": 4686,
        "country": "US",
        "sunrise": 1627811652,
        "sunset": 1627863151
    },
    "timezone": -14400,
    "id": 5103055,
    "name": "Rahway",
    "cod": 200
}
```

## Wireframes

[Home page wireframe](https://whimsical.com/rain-or-shine-XwaTUxAhrSquqLGV7jhdsY)

### MVP/PostMVP

#### MVP

- Use OpenWeather api
- Style the webpage using Flexbox
- Use a media query for desktop(mobile-first)
- Render weather information on a specific location on the page
- Use eventHandlers to display weather info in Fahrenheit

#### PostMVP

- Use local storage to save user favorites
- Render an icon for a specific weather condition
- Use an additional media query for tablet
- Use eventHandlers to display weather info in Celsius

## Project Schedule

| Day      | Deliverable                                                               | Status     |
| -------- | ------------------------------------------------------------------------- | ---------- |
| August 2 | Wireframes / Priority Matrix / Core Application Structure (HTML, CSS, JS) |  Complete  |
| August 3 | Pseudocode / Actual Code / MVP                                            |  Complete  |
| August 4 | Initial Clickable Model                                                   |  Complete  |
| August 5 | CSS Styling / PostMVP                                                     |  Complete  |
| August 6 | Presentations                                                             |  Complete  |

## Priority Matrix

[Project priority matrix](https://whimsical.com/priority-matrix-Mzu6k7RnE9cQdg2DnHwunN)

## Timeframes

| Component                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Search for API                                   |    H     |      3hrs      |     4hrs      |    4hrs     |
| Wireframes / Priority Matrix / Timeframes        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Pseudocode                                       |    H     |    0.5hrs      |    0.5hrs     |   0.5hrs    |
| Html structure                                   |    H     |    0.5hrs      |    0.5hrs     |   0.5hrs    |
| CSS structure                                    |    H     |    0.5hrs      |    0.5hrs     |   0.5hrs    |
| Working with API                                 |    H     |      3hrs      |     2hrs      |    2hrs     |
| Clickable search button                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Creating and appending elements to the DOM       |    H     |      1hrs      |    1.5hrs     |   1.5hrs    |
| Weather API fetchData function                   |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| Eventlisteners for weather in F/RemoveChild()    |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| Displaying weather in C: adjust function         |    H     |      2hrs      |    2.5hrs     |   2.5hrs    |
| CSS styling mobile-first: header/footer          |    H     |      3hrs      |     4hrs      |    4hrs     |
| CSS styling mobile-first: search, quote, results |    H     |      3hrs      |     4hrs      |    4hrs     |
| CSS Flexbox styling                              |    H     |      2hrs      |     3hrs      |    3hrs     |
| Media Query for Desktop                          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Media Query for Tablet                           |    L     |      2hrs      |     3hrs      |    3hrs     |
| MVP check/fixes/tweaks                           |    H     |      3hrs      |     2hrs      |    2hrs     |
| PostMVP checks/fixes/tweaks                      |    H     |      3hrs      |     1hrs      |    1hrs     |
| Total                                            |    H     |    40.5hrs     |   40.5hrs     |  40.5hrs    |

## Code Snippet  

```
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
                                  //using weatherUnits obj by either metric or imperial units
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

                               //weatherUnits usage
function showWeatherData(data, metadata) {
  let weatherIcon = data.weather[0].icon;
  let weatherElements = `
  <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"/>
  <h1>${data.name} | ${data.sys.country}</h1>
  <h3>${data.weather[0].main}</h3>
  <p class="main-temp">${data.main.temp}&#176 ${metadata.degree}</p>
  <p class="other-temp">H: ${data.main.temp_max}&#176 ${metadata.degree} &#160 L: ${data.main.temp_min}&#176 ${metadata.degree}</p>
  <h2>FEELS LIKE ${data.main.feels_like}&#176 ${metadata.degree}</h2>
  <p>WIND ${data.wind.speed} ${metadata.wind}</p>
  `;
  weatherInfo.insertAdjacentHTML("beforeend", weatherElements);
}
```

## Change Log
 - Added media query for tablet version
 - Hid quote when displaying weather info for a better user experience
