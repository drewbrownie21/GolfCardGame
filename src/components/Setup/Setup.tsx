type SelectPlayersType = {
  setNumOfPlayers: (num: number) => void;
  gameStart: boolean;
};

export function Setup({ setNumOfPlayers, gameStart }: SelectPlayersType) {
  const handlePlayerSelect = (e: any) => {
    setNumOfPlayers(e.target.value);
  };

  return (
    <section>
      How many players? (2 - 4)
      <select onChange={handlePlayerSelect} disabled={gameStart}>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </section>
  );
}
