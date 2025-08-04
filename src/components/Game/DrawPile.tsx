import { GenerateDeck, type Card } from "../../factory/generateDeck";
import { useState } from "react";

type DrawPile = {
  deck: Card[];
  updateDeck: (deck: Card[]) => void;
  initialDeal: boolean;
};

export function DrawPile({ deck, updateDeck, initialDeal }: DrawPile) {
  const [discardDeck, setDiscardDeck] = useState<Card[]>([]);
  const [displayedDrawCard, setDisplayedDrawCard] = useState<Card[]>([]);

  function drawCard() {
    const cardDrawn = deck.at(-1);
    updateDeck(deck.slice(0, -1));
    console.log(cardDrawn);
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
      setDisplayedDrawCard([cardDrawn]);
      return cardDrawn;
    }
  };

  const handleDiscard = () => {
    setDiscardDeck((prev) => [...prev, displayedDrawCard[0]]);
    setDisplayedDrawCard([])
    console.log(displayedDrawCard[0].suit + " was added to the discard.");
  };

  return (
    <section>
      <button onClick={handleDraw} disabled={!initialDeal}>
        Draw
      </button>
      <div>
        {displayedDrawCard.length
          ? `${displayedDrawCard[0].suit}${displayedDrawCard[0].rank}`
          : "Peak"}
      </div>
      <button onClick={handleDiscard} disabled={displayedDrawCard.length == 0}>
        Discard
      </button>
      <div>
        {discardDeck.length > 0
          ? `${discardDeck[discardDeck.length - 1].suit}${discardDeck[discardDeck.length - 1].rank}`
          : "Discard Pile"}
      </div>
    </section>
  );
}
