import { useState } from "react";
import { GenerateDeck, type Card } from "../generateDeck";
import { Setup } from "../Setup/Setup";

type GameProps = {
  deck: Card[];
  updateDeck: (card: Card[]) => void;
  children: React.ReactNode;
};

type HandRow = [Card, Card, Card];
type Hand2D = [HandRow, HandRow];

export type PlayerHandProps = {
  hand: Hand2D;
  score: number;
};

type TableProps = {
  player: PlayerHandProps;
  id: number;
};

export function Game({ deck, updateDeck, children }: GameProps) {
  const [numPlayers, setNumPlayers] = useState<number | null>(2);
  const [discarDeck, setDiscarDeck] = useState<Card[]>([]);
  const [table, setTable] = useState<TableProps[]>([]);

  function drawCard(numOfCardsDrawn: number) {
    const cardDrawn = deck.at(-numOfCardsDrawn);
    updateDeck((prev) => prev.slice(0, -1));
    console.log(cardDrawn);
    console.log("Discard length " + discarDeck.length);
    return cardDrawn;
  }

  const handleDraw = () => {
    if (deck.length === 1) {
      const deck = GenerateDeck();
      updateDeck(deck());
      setDiscarDeck([]);
    }
    let cardDrawn = drawCard(1);
    if (cardDrawn) {
      addToDiscardPile(cardDrawn);
    }
  };

  const addToDiscardPile = (card: Card) => {
    setDiscarDeck((prev) => [...prev, card]);
  };

  return (
    <section>
      <Setup setNumOfPlayers={setNumPlayers} />
      <section></section>
      <button onClick={handleDraw}>Draw</button>
      Num of players is: {numPlayers}
    </section>
  );
}
