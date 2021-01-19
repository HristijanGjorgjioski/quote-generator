let quote = document.querySelector(".cards__quote");
const card = document.querySelector(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
};

const changePosition = () => {
  card.className = "cards__single class-to-left";
};

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  // .then(function (data) {
    // console.log(data);
    //cards.forEach((card) => 
    // cards.addEventListener("click", () => {
    //   let randomNumber = Math.floor(Math.random() * 501);
    //   quote.innerHTML = data[randomNumber].text;
    // });
  // }

// cards.forEach((card) => card.addEventListener("click", flipCard));
// card.addEventListener("click", flipCard);
card.addEventListener("click", changePosition);
// cards.forEach((card) => card.addEventListener("dblclick", changePosition));
