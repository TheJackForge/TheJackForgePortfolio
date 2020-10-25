const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const quotes = document.querySelector(".quotes");

btn.addEventListener("click", () => {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.textContent = `Macho Color:` + " " + hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
