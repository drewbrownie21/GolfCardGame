import { type PlayerHandProps } from "../Game/Game";

type PlayerProps = {
  player: PlayerHandProps;
  playerId: number;
};

export function Player({ player, playerId }: PlayerProps) {
  return (
    <section>
      <h1>Player id: {playerId}</h1>
      <p>Score: {player.score}</p>
      <section>
        Row 1 - Card 1:{player.hand[0][0].suit}
        {player.hand[0][0].rank} Card 2:{player.hand[0][1].suit}
        {player.hand[0][1].rank} Card 3:{player.hand[0][2].suit}
        {player.hand[0][2].rank} <br />
        Row 2 - Card 4:{player.hand[1][0].suit}
        {player.hand[1][0].rank} Card 5:{player.hand[1][1].suit}
        {player.hand[1][1].rank} Card 6:{player.hand[1][2].suit}
        {player.hand[1][2].rank}{" "}
      </section>
    </section>
  );
}
