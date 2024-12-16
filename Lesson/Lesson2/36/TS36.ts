type Card = {
    cardSuit: 'spade' | 'diamond' | 'heart' | 'club';
    value: '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king';
    color: 'red' | 'black';
};

type Suits = {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
};

const suits: ('spade' | 'diamond' | 'heart' | 'club')[] = ['spade', 'diamond', 'heart', 'club'];
const values: ('6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king')[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        const card: Card = { cardSuit: suit, value: value, color: (suit === 'heart' || suit === 'diamond') ? 'red' : 'black' };
        cards.push(card);
    }
}
console.log(cards);

const result: Suits = cards.reduce<Suits>((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(result);
