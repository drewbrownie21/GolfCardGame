import { type TableProps } from "../Game/Game";
import type { Card } from "../../factory/generateDeck";

type InitialDealProps = {
  setTable: any;
  setDeck: any;
  table: TableProps[];
  deck: Card[];
};

export function InitialDeal({
  setTable,
  setDeck,
  table,
  deck,
}: InitialDealProps) {
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
    setDeck(currentDeck);
  };

  return <button onClick={handleInitialDeal}>Deal</button>;
}
