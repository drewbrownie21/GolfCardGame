import { useState } from "react";
import type { Card } from "../../factory/generateDeck";
import { type PlayerHandProps } from "../Game/Game";
import styles from "./Player.module.css";

type PlayerProps = {
  player: PlayerHandProps;
  playerId: number;
};

export function Player({ player, playerId }: PlayerProps) {
  return (
    <section>
      <h1>Player id: {playerId}</h1>
      <p>Score: {player.score}</p>
      <PlayersCards cards={player.hand[0]} />
      <PlayersCards cards={player.hand[1]} />
    </section>
  );
}

function PlayersCards({ cards }: { cards: Card[] }) {
  const [click, setClick] = useState(false);

  return (
    <div className={styles.hand}>
      {cards.map((card, i) => (
        <div key={i} className={styles.card} onClick={() => setClick(!click)}>
          {click ? `${card.suit} ${card.rank}` : null}
        </div>
      ))}
    </div>
  );
}
