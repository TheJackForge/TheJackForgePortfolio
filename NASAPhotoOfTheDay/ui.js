class UI {
    constructor () {
        this.title = document.getElementById('title')
        this.explanation = document.getElementById('explanation');
        this.hdurl = document.getElementById('hdurl');
        this.date = document.getElementById('date');
    }

    
    paint(photo) {
        this.title.textContent = `${photo.title}`
        this.explanation.textContent = `${photo.explanation}`
        this.hdurl.setAttribute('src', photo.hdurl)
        this.date.textContent = `${photo.date}`
    }
    
}