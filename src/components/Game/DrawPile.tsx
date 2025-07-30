import { GenerateDeck, type Card } from "../../factory/generateDeck";
import { useState } from "react";

type DrawPile = {
  deck: Card[];
  updateDeck: (deck: Card[]) => void
  initialDeal: boolean
};

export function DrawPile({ deck, updateDeck, initialDeal }: DrawPile) {
    const [discardDeck, setDiscardDeck] = useState<Card[]>([]);

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

  return(
    <section>
    <button onClick={handleDraw} disabled={!initialDeal}>
        Draw
      </button>
        <div>
            Draw Pile
        </div>
        <div>
            Discard Pile
        </div>
    </section>
  );
}
