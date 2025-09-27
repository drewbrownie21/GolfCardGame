import { type Hand2D } from "../components/Game/Game/Game";
import { type Card } from "./generateDeck";

export function GenerateTable(numOfPlayers: number) {
  const emptyCard: Card = { suit: "?", rank: 0, value: 0, flipped: false };
  const makeHand = (): Hand2D => [
    [emptyCard, emptyCard, emptyCard],
    [emptyCard, emptyCard, emptyCard],
  ];

  return Array.from({ length: numOfPlayers }).map((_, i) => ({
    id: i + 1,
    isHuman: i === 1,
    player: {
      hand: makeHand(),
      score: 0,
    },
  }));
}
