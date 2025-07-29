export type Card = {
  suit: string;
  rank: number;
  value: number;
  flipped: boolean;
};

export function GenerateDeck() {
  function randomizeDeck(randomizedDeckInput: Card[]) {
    for (let i = randomizedDeckInput.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomizedDeckInput[i], randomizedDeckInput[j]] = [
        randomizedDeckInput[j],
        randomizedDeckInput[i],
      ];
    }
    return randomizedDeckInput;
  }

  function getValue(rank: number) {
    if (rank === 11 || rank === 12) return 10;
    if (rank === 13) return 0;
    return rank;
  }
  const generateDeck = () => {
    let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let suits = ["C", "D", "H", "S"];
    let newDeck: Card[] = ranks.flatMap((rank) =>
      suits.map((suit) => ({
        suit,
        rank,
        value: getValue(rank),
        flipped: false,
      })),
    );

    return randomizeDeck(newDeck);
  };

  return generateDeck;
}
