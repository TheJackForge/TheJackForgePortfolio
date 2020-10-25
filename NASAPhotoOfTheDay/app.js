// Grab Photo from API
const nasaPhoto = new NASA;
const ui = new UI;

console.log(ui)

// Function to Grab Photo

    nasaPhoto.getPhoto()
    .then (results => ui.paint(results))
    .catch (err=> console.log(err))
