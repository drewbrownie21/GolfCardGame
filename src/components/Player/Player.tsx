import { type PlayerHandProps, type TableProps } from "../Game/Game/Game";
import styles from "./Player.module.css";
import { PlayersCard } from "../Card/Card";
import { useEffect, useState } from "react";
import { playerScore } from "../../calculations/playerScore";

type PlayerProps = {
  player: PlayerHandProps;
  playerId: number;
  setTable: (table: TableProps[]) => void;
  table: TableProps[];
  initialDeal: boolean;
  handLimit?: number;
};

export function Player({
  player,
  playerId,
  setTable,
  table,
  initialDeal,
  handLimit = 6,
}: PlayerProps) {
  /*
  Future lets do something like (game of 9 is the only one that needs 3 rows)
  const rows = handLimit != 6 ? 3 : 2
  Same for cols, 3 cols unless its a hand of 4
  const cols = handLimit != 4 ? 3 : 2
  */
  const ROWS = 2;
  const COLS = 3;

  const [values, setValues] = useState<(number | null)[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null)),
  );

  const handleScoreUpdate = (value: number, row: number, col: number) => {
    // console.log(value, row, col);
    setValues((prev) =>
      prev.map((r, rowIndex) =>
        rowIndex === row
          ? r.map((cell, colIndex) => (colIndex === col ? value : cell))
          : r,
      ),
    );
    // console.log(values);
  };

  useEffect(() => {
    playerScore(values);
  }, [values]);

  return (
    <section>
      <h1 onClick={() => console.log(table)}>Player id: {playerId}</h1>
      <p>Score: {player.score}</p>
      <div className={styles.hand}>
        {Array.from({ length: ROWS }).map((_, rowIndex) =>
          Array.from({ length: COLS }).map((_, colIndex) => (
            <PlayersCard
              key={`${rowIndex}-${colIndex}`}
              player={player}
              row={rowIndex}
              col={colIndex}
              setTable={setTable}
              table={table}
              playerId={playerId}
              handIsDealt={initialDeal}
              setValue={(value) => handleScoreUpdate(value, rowIndex, colIndex)}
            />
          )),
        )}
      </div>
    </section>
  );
}
