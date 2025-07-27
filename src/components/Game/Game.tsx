import type { Card } from "../generateDeck";

type GameProps = {
  deck: Card[];
  updateDeck: (card: Card[]) => void;
  children: React.ReactNode;
};

export function Game({ deck, updateDeck, children }: GameProps) {
  function drawCard(numOfCardsDrawn: number) {
    const cardDrawn = deck.at(-numOfCardsDrawn);
    updateDeck((prev) => prev.slice(0, -1));
    return cardDrawn;
  }

  return (
    <section>
      <div>{children}</div>
      <button onClick={() => drawCard(1)} disabled={deck.length === 0}>
        Generate
      </button>
    </section>
  );
}
