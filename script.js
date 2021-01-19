let author = document.querySelector(".cards__author");
let quote = document.querySelector(".cards__quote");
const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    cards.forEach((card) => card.addEventListener("click", () => {
      let randomNumber = Math.floor(Math.random() * 501);
      quote.innerHTML = data[randomNumber].text;
      author.innerHTML = data[randomNumber].author;
    }));
  });

