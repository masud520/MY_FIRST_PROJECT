// JavaScript code for the Weather App
const api_key = "108a2deeca15bae50e0b94f48f18ab46";
const api_url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// Function to check weather for a given city
async function checkWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "css/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "css/images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "css/images/drizzle.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "css/images/rain.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "css/images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "css/images/snow.png";
        } else if (data.weather[0].main == "Humidity") {
            weatherIcon.src = "css/images/humidity.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Add an event listener to the button for checking the weather
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Call the checkWeather function when the page loads
checkWeather();
