interface Card {
    cardSuit: 'spade' | 'diamond' | 'heart' | 'clubs';
    value: '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king';
    color: 'red' | 'black';
}

const suits: ('spade' | 'diamond' | 'heart' | 'clubs')[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: ('6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king')[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        const card: Card = { cardSuit: suit, value: value, color: suit === 'heart' || suit === 'diamond' ? 'red' : 'black' };
        cards.push(card);
    }

    console.log(cards);

    const findAceOfSpades = (cards: Card[]): Card | undefined => {
        return cards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
    };
    console.log(findAceOfSpades(cards));

    const findAllSixes = (cards: Card[]): Card[] => {
        return cards.filter(card => card.value === '6');
    };
    console.log(findAllSixes(cards));

    const findAllRedCards = (cards: Card[]): Card[] => {
        return cards.filter(card => card.color === 'red');
    };
    console.log(findAllRedCards(cards));

    const findAllDiamonds = (cards: Card[]): Card[] => {
        return cards.filter(card => card.cardSuit === 'diamond');
    };
    console.log(findAllDiamonds(cards));

    const findAllClubsAboveNine = (cards: Card[]): Card[] => {
        return cards.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
    };
    console.log(findAllClubsAboveNine(cards));
