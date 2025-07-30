import { useState } from "react";
import { type PlayerHandProps, type TableProps } from "../Game/Game";
import styles from "./Player.module.css";

type PlayerProps = {
  player: PlayerHandProps;
  playerId: number;
  setTable: (table: TableProps[]) => void, 
  table: TableProps[],
};

export function Player({ player, playerId, setTable, table }: PlayerProps) {
  return (
    <section>
      <h1 onClick={() => console.log(table)}>Player id: {playerId}</h1>
      <p>Score: {player.score}</p>
      <div className={styles.hand}>
        <PlayersCards player={player} row={0} col={0} setTable={setTable} table={table} playerId={playerId}/>
        <PlayersCards player={player} row={0} col={1} setTable={setTable} table={table} playerId={playerId}/>
        <PlayersCards player={player} row={0} col={2} setTable={setTable} table={table} playerId={playerId}/>
        <PlayersCards player={player} row={1} col={0} setTable={setTable} table={table} playerId={playerId}/>
        <PlayersCards player={player} row={1} col={1} setTable={setTable} table={table} playerId={playerId}/>
        <PlayersCards player={player} row={1} col={2} setTable={setTable} table={table} playerId={playerId}/>
      </div>
    </section>
  );
}

type PlayersCardsType = {
  player: PlayerHandProps;
  col: number;
  row: number;
  setTable: (table: TableProps[]) => void; 
  table: TableProps[];
  playerId: number
};
function PlayersCards({ player, col, row, setTable, table, playerId }: PlayersCardsType) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardFlip = () => {
    setIsFlipped(true)

    const updatedTable = [...table];

    for(let playerIndex = 0; playerIndex < table.length + 1; playerIndex++){
      if(playerIndex + 1 === playerId){
        for(let rowIndex = 0; rowIndex < 2; rowIndex++){
          if(rowIndex === row){
            for(let colIndex = 0; colIndex < 3; colIndex++){
              if(colIndex === col){

                updatedTable[playerIndex] = {
                  ...updatedTable[playerIndex],
                  player: {
                    ...updatedTable[playerIndex].player,
                    hand: [
                      [...updatedTable[playerIndex].player.hand[0]],
                      [...updatedTable[playerIndex].player.hand[1]],
                    ]
                  }
                }
                
                updatedTable[playerIndex].player.hand[rowIndex][colIndex] = {
                  ...updatedTable[playerIndex].player.hand[rowIndex][colIndex],
                  flipped: true,
              }
            }
          }
        }
      }
    }
  }
  setTable(updatedTable)
}

  return (
    <div className={styles.card} onClick={handleCardFlip}>
      {isFlipped ? `${player.hand[row][col].suit} ${player.hand[row][col].rank}`: null}
    </div>
  );
}
