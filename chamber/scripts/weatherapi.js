// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#wind-speed");

const url = "http://api.openweathermap.org/data/2.5/weather?q=Seaside&units=imperial&appid=d4c57419a8ef6c84627d5049294d57b5";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //temporary check/test of data conversion - demonstrate
            //console.log(data);
            
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    
    
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(2)}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
}

const t = weatherData.main.temp.toFixed(0);
const s = weatherData.wind.speed.toFixed(2);
let windchill = "";

function windChill(t, s) {
  if (t <= 50 && s > 3) {
    windchill = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
  } 
  else {
    windchill = "N/A";
  }
  document.getElementById("#wind-chill").innerHTML = windchill;
  
}
