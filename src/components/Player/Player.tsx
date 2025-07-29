import { type PlayerHandProps } from "../Game/Game";

type PlayerProps = {
  player: PlayerHandProps;
  playerId: number;
};

export function Player({ player, playerId }: PlayerProps) {
  console.log(player)
  return (
    <section>
      <h1>Player id: {playerId}</h1>
      <p>Score: {player.score}</p>
      <section>
        Row 1 - Suit: {player.hand[0][0].suit} Rank: {player.hand[0][0].rank} Value: {player.hand[0][0].value} <br/>
        Row 2 - Suit: {player.hand[0][1].suit} Rank: {player.hand[0][1].rank} Value: {player.hand[0][1].value}
      </section>
    </section>
  );
}
