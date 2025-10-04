import { GenerateDeck, type Card } from "../../../factory/generateDeck";
import { useState } from "react";

type DrawPile = {
  deck: Card[];
  updateDeck: (deck: Card[]) => void;
  initialDeal: boolean;
};

export function DrawPile({ deck, updateDeck, initialDeal }: DrawPile) {
  const [discardDeck, setDiscardDeck] = useState<Card[]>([]);
  const [displayedDrawCard, setDisplayedDrawCard] = useState<Card[]>([]);
  const [isCardDrawn, setIsCardDrawn] = useState(false);

  function drawCard() {
    const cardDrawn = deck.at(-1);
    updateDeck(deck.slice(0, -1));
    console.log(cardDrawn);
    setIsCardDrawn(true);
    return cardDrawn;
  }

  const reshuffleDeck = () => {
    if (discardDeck.length === 0) {
      console.log("No cards left to shuffle back in.");
      return;
    }

    const newDeck = GenerateDeck(discardDeck);
    updateDeck(newDeck);
    setDiscardDeck([]);
    console.log("Shuffling discard pile into new deck:", newDeck);
  };

  const handleDraw = () => {
    if (deck.length === 0) {
      reshuffleDeck();
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
    setDisplayedDrawCard([]);
    console.log(displayedDrawCard[0].suit + " was added to the discard.");
    console.log("Discard deck length " + discardDeck.length);
    setIsCardDrawn(false);
  };

  return (
    <section>
      <button onClick={handleDraw} disabled={!initialDeal || isCardDrawn}>
        {deck.length === 0 ? "Shuffle" : "Draw"}
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
          ? `${discardDeck[discardDeck.length - 1].suit}${discardDeck[discardDeck.length - 1].rank} | Discard Deck Length: ${discardDeck.length}`
          : "Discard Pile"}
      </div>
    </section>
  );
}
