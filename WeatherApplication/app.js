// Initialize Storage
const storage = new Storage();

// Get Stored Location Data

const weatherLocation = storage.getLocationData();

// Init the Weather Object

const weather = new Weather(weatherLocation.city, weatherLocation.region);

const ui = new UI;






// Get Weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const region = document.getElementById('region').value;
    // Change Location
    weather.changeLocation(city, region);

    // Set LocalStorage

    storage.setLocationData(city, region);

    // Get Weather
    getWeather();
    // Close Modal - Need to use JQuery
    $('#locModal').modal('hide');
})





// Change Location Event

document.getElementById('')

function getWeather() {
weather.getWeather()
    .then( results => ui.paint(results))
    .catch( err => console.log(err))

}


