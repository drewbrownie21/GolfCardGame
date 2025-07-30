import type { TableProps } from "./Game";
import type { Card } from "../../factory/generateDeck";

type GameStartProps = {
  setTable: (table: TableProps[]) => void;
  setDeck: (deck: Card[]) => void;
  table: TableProps[];
  deck: Card[];
  setInitialDeal: (initialDeal: boolean) => void;
  initialDeal: boolean;
  setStartingPlayer: (startingPlayer: number) => void;
};

export function GameStart({
  setTable,
  setDeck,
  table,
  deck,
  setInitialDeal,
  initialDeal,
  setStartingPlayer,
}: GameStartProps) {
  const handlePickingStartingPlayer = () => {
    let pickedPlayer = table[Math.floor(Math.random() * table.length)].id;
    console.log(pickedPlayer);
    setStartingPlayer(pickedPlayer);
  };

  const handleInitialDeal = () => {
    setInitialDeal(true);
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

  const handleGameStart = () => {
    handlePickingStartingPlayer();
    handleInitialDeal();
  };

  return (
    <section>
      <button onClick={handleGameStart} disabled={initialDeal}>
        Start Game
      </button>
    </section>
  );
}
