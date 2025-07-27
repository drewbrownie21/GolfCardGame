import type { Card } from "../Deck";

type GameProps = {
  deck: Card[];
  updateDeck: (card: Card[]) => void;
  onCardDrawn: (card: Card[]) => void;
  children: any;
};

export function Game({ deck, children, updateDeck, onCardDrawn }: GameProps) {
  function drawCard(numOfCardsDrawn: number) {
    const cardDrawn = deck.at(-numOfCardsDrawn);
    updateDeck((prev) => prev.slice(0, -1));
    if (cardDrawn) {
      onCardDrawn([cardDrawn]);
    }
    return cardDrawn;
  }

  return (
    <section>
      <div>{children}</div>
      <button
        onClick={() => drawCard(numOfCardsDrawn)}
        disabled={deck.length === 0}
      >
        Generate
      </button>
    </section>
  );
}
