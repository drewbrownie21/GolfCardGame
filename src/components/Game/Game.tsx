import { useState } from "react";
import { GenerateDeck, type Card } from "../generateDeck";
import { Setup } from "../Setup/Setup";

type GameProps = {
  deck: Card[];
  updateDeck: (card: Card[]) => void;
  children: React.ReactNode;
};

export function Game({ deck, updateDeck, children }: GameProps) {
  const [numPlayers, setNumPlayers] = useState<number | null>(2);

  function drawCard(numOfCardsDrawn: number) {
    const cardDrawn = deck.at(-numOfCardsDrawn);
    updateDeck((prev) => prev.slice(0, -1));
    console.log(cardDrawn);
    return cardDrawn;
  }

  const handleDraw = () => {
    if (deck.length === 1) {
      const deck = GenerateDeck();
      updateDeck(deck);
    }
    drawCard(1);
  };

  return (
    <section>
      <Setup setNumOfPlayers={setNumPlayers} />
      <div>{children}</div>
      <button onClick={handleDraw}>Draw</button>
      Num of players is: {numPlayers}
    </section>
  );
}
