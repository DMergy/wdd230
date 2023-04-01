let t = parseFloat(document.querySelector("#current-temp").textContent);
let s = parseFloat(document.querySelector("#wind-speed").textContent);
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

