let showbtn = document.getElementById("btn");
let input = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let error = document.getElementById('error')
let Latitude = document.getElementById('lat');
const APIKEY = 'your_key_here';

async function getWeather() {
    if(input.value.trim() === ''){
        error.textContent = 'Please enter a city name';
        setTimeout(() => {
            error.textContent = ""
        },1500)

        return;
    }
  try {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIKEY}&units=metric`,);
    let data = await res.json();

    if(data.cod === '404'){
        error.textContent = 'City not Found'
        setTimeout(() => {
            error.textContent = ''
        },1500);

        return;
    }

    city.textContent = `City Name : ${data.name}`;
    temp.textContent = `temperature : ${data.main.temp + "°C"}`;
    Latitude.textContent = `Latitude : ${data.coord.lat}`
    description.textContent = `description : ${data.weather[0].description}`;
    humidity.textContent = `Humidity : ${data.main.humidity + "%"}`;
  } catch (error) {
    console.log(error);
  }
}

showbtn.addEventListener("click", () => {
  getWeather();
  input.value = ''
});
