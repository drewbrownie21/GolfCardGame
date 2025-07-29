import { useEffect, useState } from "react";
import { GenerateDeck, type Card } from "../../factory/generateDeck";
import { GenerateTable } from "../../factory/generateTable";
import { Setup } from "../Setup/Setup";
import { Player } from "../Player/Player";

type GameProps = {
  deck: Card[];
  updateDeck: (card: Card[]) => void;
};

type HandRow = [Card, Card, Card];
export type Hand2D = [HandRow, HandRow];

export type PlayerHandProps = {
  hand: Hand2D;
  score: number;
};

type TableProps = {
  player: PlayerHandProps;
  id: number;
  isHuman: boolean;
};

export function Game({ deck, updateDeck }: GameProps) {
  const [numPlayers, setNumPlayers] = useState<number | null>(2);
  const [discardDeck, setDiscardDeck] = useState<Card[]>([]);
  const [table, setTable] = useState<TableProps[]>([]);

  //   Initlize the basic table
  useEffect(() => {
    if (numPlayers) setTable(GenerateTable(numPlayers));
  }, [numPlayers]);

  function drawCard(numOfCardsDrawn: number) {
    const cardDrawn = deck.at(-numOfCardsDrawn);
    updateDeck((prev) => prev.slice(0, -1));
    console.log(cardDrawn);
    console.log("Discard length " + discardDeck.length);
    return cardDrawn;
  }

  const handleDraw = () => {
    if (deck.length === 1) {
      const deck = GenerateDeck();
      updateDeck(deck());
      setDiscardDeck([]);
    }
    let cardDrawn = drawCard(1);
    if (cardDrawn) {
      addToDiscardPile(cardDrawn);
    }
  };

  const addToDiscardPile = (card: Card) => {
    setDiscardDeck((prev) => [...prev, card]);
  };

  return (
    <section>
      <Setup setNumOfPlayers={setNumPlayers} />
      <section>
        {table.map((row, index) => (
          <Player key={index} hand={row.player} playerId={index + 1} />
        ))}
      </section>
      <button onClick={handleDraw}>Draw</button>
      Num of players is: {numPlayers}
    </section>
  );
}
