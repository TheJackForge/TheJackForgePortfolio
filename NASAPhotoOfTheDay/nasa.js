class NASA {
    constructor () {
        this.apiKey = '2jrcegPihT7dganLXE9fOQ3rLk8LAfvL9Ne26Bf7'
    }

    async getPhoto() {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=2jrcegPihT7dganLXE9fOQ3rLk8LAfvL9Ne26Bf7')

        const responseData = await response.json()

        console.log(responseData);

        return responseData;
    }

}