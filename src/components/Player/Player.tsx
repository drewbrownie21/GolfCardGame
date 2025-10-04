import { type PlayerHandProps, type TableProps } from "../Game/Game/Game";
import styles from "./Player.module.css";
import { Card } from "../Card/Card";

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
  const rows = 2;
  const cols = 3;

  return (
    <section>
      <h1 onClick={() => console.log(table)}>Player id: {playerId}</h1>
      <p>Score: {player.score}</p>
      <div className={styles.hand}>
        <Card
          player={player}
          row={0}
          col={0}
          setTable={setTable}
          table={table}
          playerId={playerId}
          initialDeal={initialDeal}
        />
        <Card
          player={player}
          row={0}
          col={1}
          setTable={setTable}
          table={table}
          playerId={playerId}
          initialDeal={initialDeal}
        />
        <Card
          player={player}
          row={0}
          col={2}
          setTable={setTable}
          table={table}
          playerId={playerId}
          initialDeal={initialDeal}
        />
        <Card
          player={player}
          row={1}
          col={0}
          setTable={setTable}
          table={table}
          playerId={playerId}
          initialDeal={initialDeal}
        />
        <Card
          player={player}
          row={1}
          col={1}
          setTable={setTable}
          table={table}
          playerId={playerId}
          initialDeal={initialDeal}
        />
        <Card
          player={player}
          row={1}
          col={2}
          setTable={setTable}
          table={table}
          playerId={playerId}
          initialDeal={initialDeal}
        />
      </div>
    </section>
  );
}
