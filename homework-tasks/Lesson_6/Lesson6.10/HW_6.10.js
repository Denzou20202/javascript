const suits = [
  {cardSuit: 'spade', color: 'black'},
  {cardSuit: 'clubs', color: 'black'},
  {cardSuit: 'diamond', color: 'red'},
  {cardSuit: 'heart', color: 'red'}
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deckOfCards = [];

for (let suit of suits) {
  for (let value of values) {
    deckOfCards.push({
      value: value,
      cardSuit: suit.cardSuit,
      color: suit.color
    });
  }
}

// знайти піковий туз
const spadeAce = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', spadeAce);

// всі шістки
const allSixes = deckOfCards.filter(card => card.value === '6');
console.log('Всі шістки:', allSixes);

// всі червоні карти
const allRedCards = deckOfCards.filter(card => card.color === 'red');
console.log('Червоні карти:', allRedCards);

// всі буби
const allDiamonds = deckOfCards.filter(card => card.cardSuit === 'diamond');
console.log('Буби:', allDiamonds);

// всі трефи від 9 та більше
const allCardsFromNine = deckOfCards.filter(card =>
  card.cardSuit === 'clubs' &&
  (card.value === '9' || card.value === '10' || card.value === 'jack' ||
    card.value === 'queen' || card.value === 'king' || card.value === 'ace')
);
console.log('Трефи від 9 і більше:', allCardsFromNine);
