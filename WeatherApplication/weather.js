class Weather {
    constructor (city, region) {
        this.apiKey = 'e1d1809e26f648d6b07125912202410';
        this.city = city;
        this.region = region;
    }

//Fetch Weather From API

        async getWeather() {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&q=${this.region}`)
            const responseData = await response.json();
            console.log(responseData)
            return responseData;
    }

        changeLocation(city, region) {
            this.city = city
            this.region = region
        }
}