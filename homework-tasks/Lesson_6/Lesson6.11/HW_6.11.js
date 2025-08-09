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

let groupCards = deckOfCards.reduce((acc, card) => {
  if (card.cardSuit === 'spade') {
    acc.spades.push(card)
  } else if (card.cardSuit === 'clubs') {
    acc.clubs.push(card)
  } else if (card.cardSuit === 'diamond')  {
    acc.diamonds.push(card)
  } else {
    acc.hearts.push(card)
  }
  return acc
},
  {spades: [],
  clubs:[],
  diamonds: [],
  hearts:[] }
)

console.log(groupCards)
