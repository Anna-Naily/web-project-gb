import bundlerPicOne from "./1.jpg";
import bundlerPicTwo from "./2.jpg";
import bundlerPicThree from "./3.jpg";

let arrCards = [
  { name: "Мельница", img: bundlerPicOne },
  { name: "Горы", img: bundlerPicTwo },
  { name: "Дача", img: bundlerPicThree },
];
function toDisplayCard() {
  let cards = document.querySelector(".galleryCards");
  let cardBar = `<ul class="cards">`;
  for (let i = 0; i < arrCards.length; i++) {
    cardBar += `<li class="cardElement">
      <h1 class="headingCards">${arrCards[i].name}</h1>
      <img width="200px" height="200px" src=${arrCards[i].img} alt="photo" />
    </li>`;
  }
  cardBar += `</ul>`;
  cards.innerHTML = cardBar;
}

export { toDisplayCard };
