import { type PlayerHandProps } from "../Game/Game";

type PlayerProps = {
  hand: PlayerHandProps;
  playerId: number;
};

export function Player({ hand, playerId }: PlayerProps) {
  return (
    <section>
      <h1>Player id: {playerId}</h1>
    </section>
  );
}
