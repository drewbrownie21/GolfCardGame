import { useState } from "react";
import { type PlayerHandProps, type TableProps } from "../Game/Game/Game";
import styles from "./Card.module.css";

type CardProps = {
  player: PlayerHandProps;
  col: number;
  row: number;
  setTable: (table: TableProps[]) => void;
  table: TableProps[];
  playerId: number;
  handIsDealt: boolean;
  setValue: (value: number) => void;
};

export function PlayersCard({
  player,
  col,
  row,
  setTable,
  table,
  playerId,
  handIsDealt,
  setValue,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(true);

    const updatedTable = [...table];

    for (let playerIndex = 0; playerIndex < table.length + 1; playerIndex++) {
      if (playerIndex + 1 === playerId) {
        for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
          if (rowIndex === row) {
            for (let colIndex = 0; colIndex < 3; colIndex++) {
              if (colIndex === col) {
                updatedTable[playerIndex] = {
                  ...updatedTable[playerIndex],
                  player: {
                    ...updatedTable[playerIndex].player,
                    hand: [
                      [...updatedTable[playerIndex].player.hand[0]],
                      [...updatedTable[playerIndex].player.hand[1]],
                    ],
                  },
                };

                updatedTable[playerIndex].player.hand[rowIndex][colIndex] = {
                  ...updatedTable[playerIndex].player.hand[rowIndex][colIndex],
                  flipped: true,
                };
              }
            }
          }
        }
      }
    }
    setTable(updatedTable);
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        if (handIsDealt) {
          handleCardFlip();
          setValue(player.hand[row][col].value);
        } else {
          setValue(0);
        }
      }}
    >
      <Card card={player.hand[row][col]} isFlipped={isFlipped} />
    </div>
  );
}

function Card({ card, isFlipped }: any) {
  return <>{isFlipped ? `${card.suit} ${card.rank}` : null}</>;
}
