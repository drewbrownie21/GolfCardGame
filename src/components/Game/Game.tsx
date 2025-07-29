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

  function drawCard() {
    const cardDrawn = deck.at(-1);
    updateDeck(deck.slice(0, -1));
    console.log(cardDrawn);
    console.log("Discard length " + discardDeck.length);
    return cardDrawn;
  }

  /**
   * Draws a card from the deck, reshuffling if the deck is empty.
   */
  const handleDraw = () => {
    if (deck.length === 0) {
      const newDeck = GenerateDeck(discardDeck);
      updateDeck(newDeck());
      setDiscardDeck([]);
      console.log("Shuffling...");
      return;
    }
    let cardDrawn = drawCard();
    if (cardDrawn) {
      addToDiscardPile(cardDrawn);
      return cardDrawn;
    }
  };

  const addToDiscardPile = (card: Card) => {
    setDiscardDeck((prev) => [...prev, card]);
  };

  /**
   * initialDeal deals 6 cards per player, dealing 1 card per player until intial hands are at 6
   */
  const handleInitialDeal = () => {
    const updatedTable = [...table];
    let currentDeck = [...deck];

    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        for (
          let playerIndex = 0;
          playerIndex < updatedTable.length;
          playerIndex++
        ) {
          const cardDrawn = currentDeck.pop();
          if (!cardDrawn) break;
          const player = updatedTable[playerIndex];
          player.player.hand[row][col] = cardDrawn;
        }
      }
    }

    setTable(updatedTable);
    updateDeck(currentDeck);
  };

  return (
    <section>
      <Setup setNumOfPlayers={setNumPlayers} />
      <section>
        {table.map((row, index) => (
          <Player key={index} player={row.player} playerId={index + 1} />
        ))}
      </section>
      <button onClick={handleDraw}>Draw</button>
      <button onClick={handleInitialDeal}>Deal</button>
    </section>
  );
}
