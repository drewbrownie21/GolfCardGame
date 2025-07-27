type SelectPlayersType = {
  setNumOfPlayers: (num: number) => void;
};

export function Setup({ setNumOfPlayers }: SelectPlayersType) {
  const handlePlayerSelect = (e: any) => {
    setNumOfPlayers(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section>
      How many players? (2 - 4)
      <select onChange={handlePlayerSelect}>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </section>
  );
}
