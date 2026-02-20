document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";


