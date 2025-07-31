import { useEffect, useState } from "react";
import type { Card } from "../../factory/generateDeck";
import { GenerateTable } from "../../factory/generateTable";
import { Setup } from "../Setup/Setup";
import { Player } from "../Player/Player";
import { GameStart } from "./GameStart";
import { DrawPile } from "./DrawPile";

type GameProps = {
  deck: Card[];
  updateDeck: (card: Card[]) => void;
};

export type HandRow = [Card, Card, Card];
export type Hand2D = [HandRow, HandRow];

export type PlayerHandProps = {
  hand: Hand2D;
  score: number;
};

export type TableProps = {
  player: PlayerHandProps;
  id: number;
  isHuman: boolean;
};

export function Game({ deck, updateDeck }: GameProps) {
  const [numPlayers, setNumPlayers] = useState<number | null>(2);
  const [table, setTable] = useState<TableProps[]>([]);
  const [initialDeal, setInitialDeal] = useState(false);
  const [playersTurn, setPlayersTurn] = useState<number>();

  //   Initlize the basic table
  useEffect(() => {
    if (numPlayers) setTable(GenerateTable(numPlayers));
  }, [numPlayers]);

  return (
    <section>
      <Setup setNumOfPlayers={setNumPlayers} gameStart={initialDeal} />
      <GameStart
        setTable={setTable}
        setDeck={updateDeck}
        table={table}
        deck={deck}
        setInitialDeal={setInitialDeal}
        initialDeal={initialDeal}
        setStartingPlayer={setPlayersTurn}
      />
      <section>
        {table.map((row, index) => (
          <Player
            key={index}
            player={row.player}
            playerId={index + 1}
            setTable={setTable}
            table={table}
            initialDeal={initialDeal}
          />
        ))}
      </section>
      <DrawPile deck={deck} updateDeck={updateDeck} initialDeal={initialDeal} />
    </section>
  );
}
