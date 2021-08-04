# Project Overview

## Project Name

### Rain or Shine?

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

#### PostMVP

- Use local storage to save user favorites
- Render an icon for a specific weather condition
- Use an additional media query for tablet

## Project Schedule

| Day      | Deliverable                                                                                               | Status     |
| -------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| August 2 | Wireframes / Priority Matrix / Timeframes / Project Approval / Core Application Structure (HTML, CSS, JS) | Incomplete |
| August 3 | Pseudocode / Actual Code / MVP                                                                            | Incomplete |
| August 4 | Initial Clickable Model                                                                                   | Incomplete |
| August 5 | CSS Styling / PostMVP                                                                                     | Incomplete |
| August 6 | Presentations                                                                                             | Incomplete |

## Priority Matrix

[Project priority matrix](https://whimsical.com/priority-matrix-Mzu6k7RnE9cQdg2DnHwunN)

## Timeframes

| Component                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Search for API                                   |    H     |      3hrs      |     4hrs      |    4hrs     |
| Wireframes / Priority Matrix / Timeframes        |    H     |      5hrs      |     5hrs      |    5hrs     |
| Pseudocode                                       |    H     |     .5hrs      |               |             |
| Html structure                                   |    H     |     .5hrs      |               |             |
| CSS structure                                    |    H     |     .5hrs      |               |             |
| Working with API                                 |    H     |      3hrs      |               |             |
| Clickable search button                          |    H     |      2hrs      |               |             |
| Creating and appending elements to the DOM       |    H     |      1hrs      |               |             |
| Weather API fetchData function                   |    H     |      3hrs      |               |             |
| Eventlisteners/RemoveChild()                     |    H     |      3hrs      |               |             |
| Displaying the current date and time of location |    H     |      3hrs      |               |             |
| CSS styling mobile-first                         |    H     |      7hrs      |               |             |
| CSS Flexbox styling                              |    H     |      3hrs      |               |             |
| Media Query for Desktop                          |    H     |      3hrs      |               |             |
| Media Query for Tablet                           |    H     |      2hrs      |               |             |
| MVP check/fixes/tweaks                           |    H     |      3hrs      |               |             |
| PostMVP checks/fixes/tweaks                      |    H     |      3hrs      |               |             |
| Total                                            |    H     |    42.5hrs     |     9hrs      |    9hrs     |
