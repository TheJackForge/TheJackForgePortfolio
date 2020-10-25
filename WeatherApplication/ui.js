class UI {
    constructor () {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.lastupdated = document.getElementById('w-last-updated');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.location.name}, ${weather.location.region}`; 
        this.desc.textContent = `${weather.current.temp_c} C (${weather.current.temp_f} F)`;
        this.string.textContent = weather.current.condition.text;
        this.icon.setAttribute('src', weather.current.condition.icon)
        this.humidity.textContent = `Humidity: ${weather.current.humidity}`;
        this.feelslike.textContent = `Feels like: ${weather.current.feelslike_c} C (${weather.current.feelslike_f} F)`;
        this.lastupdated.textContent = `Last updated: ${weather.current.last_updated}`;
        this.wind.textContent = `Wind: ${weather.current.wind_kph} kph (${weather.current.wind_mph} mph) from the ${weather.current.wind_dir}`;
    }
}