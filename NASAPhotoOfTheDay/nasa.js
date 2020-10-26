class NASA {
    constructor () {
        this.apiKey = '2jrcegPihT7dganLXE9fOQ3rLk8LAfvL9Ne26Bf7'
    }

    async getPhoto() {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`)

        const responseData = await response.json()

        console.log(response);
        console.log(responseData);

        if (response.status !== 200) {
            document.querySelector('.title-header').innerHTML = `<h1>NASA Astro Photo of the Day</h1>`
            document.getElementById('hdurl').setAttribute('src', "RhoAntares_Abolfath_3000.jpg")
            document.getElementById('title').innerHTML = `<h2>The Colorful Clouds of Rho Ophiuchi</h2>`
            document.getElementById('explanation').innerHTML = `<p>The many spectacular colors of the Rho Ophiuchi (oh'-fee-yu-kee) clouds highlight the many processes that occur there. The blue regions shine primarily by reflected light. Blue light from the Rho Ophiuchi star system and nearby stars reflects more efficiently off this portion of the nebula than red light. The Earth's daytime sky appears blue for the same reason. The red and yellow regions shine primarily because of emission from the nebula's atomic and molecular gas. Light from nearby blue stars - more energetic than the bright star Antares - knocks electrons away from the gas, which then shines when the electrons recombine with the gas. The dark brown regions are caused by dust grains - born in young stellar atmospheres - which effectively block light emitted behind them. The Rho Ophiuchi star clouds, well in front of the globular cluster M4 visible here on the upper right, are even more colorful than humans can see - the clouds emits light in every wavelength band from the radio to the gamma-ray.</p>`
            } else {
            return responseData;
        } 
    }

}