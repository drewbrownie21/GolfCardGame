import { useEffect, useState } from "react";
import { GenerateDeck, type Card } from "../../factory/generateDeck";
import { GenerateTable } from "../../factory/generateTable";
import { Setup } from "../Setup/Setup";
import { Player } from "../Player/Player";
import { GameStart } from "./GameStart";

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

export type TableProps = {
  player: PlayerHandProps;
  id: number;
  isHuman: boolean;
};

export function Game({ deck, updateDeck }: GameProps) {
  const [numPlayers, setNumPlayers] = useState<number | null>(2);
  const [discardDeck, setDiscardDeck] = useState<Card[]>([]);
  const [table, setTable] = useState<TableProps[]>([]);
  const [initialDeal, setInitialDeal] = useState(false);
  const [playersTurn, setPlayersTurn] = useState<number>();

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

  return (
    <section>
      <Setup setNumOfPlayers={setNumPlayers} gameStart={initialDeal} />
      <GameStart
        setTable={setTable}
        setDeck={updateDeck}
        table={table}
        deck={deck}
        setInitialDeal={setInitialDeal}
        initialDeal={initialDeal}
        setStartingPlayer={setPlayersTurn}
      />
      <section>
        {table.map((row, index) => (
          <Player key={index} player={row.player} playerId={index + 1} />
        ))}
      </section>
      <button onClick={handleDraw}>Draw</button>
    </section>
  );
}
